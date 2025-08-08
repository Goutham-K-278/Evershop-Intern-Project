import { Field } from '@components/common/form/Field';
import { useFormContext } from '@components/common/form/Form';
import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { useQuery } from 'urql';
const AttributesQuery = `
  query Query($filters: [FilterInput]) {
    attributes(filters: $filters) {
      items {
        attributeId
        attributeCode
        attributeName
        options {
          value: attributeOptionId
          text: optionText
        }
      }
    }
  }
`;
export function CreateVariantGroup({ createVariantGroupApi, setGroup }) {
    var _a, _b, _c;
    const [attributes, setAttributes] = React.useState([]);
    const formContext = useFormContext();
    // Get the current value of attribute_group_id from the form context
    const groupField = ((formContext === null || formContext === void 0 ? void 0 : formContext.fields) || []).find((f) => f.name === 'group_id');
    const onCreate = async (e) => {
        e.preventDefault();
        const response = await fetch(createVariantGroupApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                attribute_codes: attributes.map((a) => a),
                attribute_group_id: groupField === null || groupField === void 0 ? void 0 : groupField.value
            })
        }).then((r) => r.json());
        if (!response.error) {
            setGroup({
                variantGroupId: response.data.variant_group_id,
                addItemApi: response.data.addItemApi,
                attributes: response.data.attributes.map((attribute) => ({
                    attributeCode: attribute.attribute_code,
                    uuid: attribute.uuid,
                    attributeName: attribute.attribute_name,
                    attributeId: attribute.attribute_id,
                    options: attribute.options.map((option) => ({
                        optionId: option.attribute_option_id,
                        optionText: option.option_text
                    }))
                }))
            });
        }
        else {
            toast.error(response.error.message);
        }
    };
    const shouldPause = groupField === undefined || groupField === null || !groupField.value;
    const [result] = useQuery({
        query: AttributesQuery,
        variables: {
            filters: [
                { key: 'type', operation: 'eq', value: 'select' },
                { key: 'group', operation: 'eq', value: groupField === null || groupField === void 0 ? void 0 : groupField.value }
            ]
        },
        pause: shouldPause
    });
    const { data, fetching, error } = result;
    if (fetching) {
        return (React.createElement("div", { className: "p-3 flex justify-center items-center border rounded border-divider" },
            React.createElement(Spinner, { width: 30, height: 30 })));
    }
    if (error) {
        return React.createElement("p", { className: "text-critical" }, error.message);
    }
    return (React.createElement("div", null,
        React.createElement("div", null,
            (((_a = data === null || data === void 0 ? void 0 : data.attributes) === null || _a === void 0 ? void 0 : _a.items) || []).length > 0 && (React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("span", null, "Select the list of attribute")),
                (((_b = data === null || data === void 0 ? void 0 : data.attributes) === null || _b === void 0 ? void 0 : _b.items) || []).map((a) => (React.createElement(Field, { key: a.attributeCode, type: "checkbox", label: a.attributeName, onChange: (e) => {
                        if (e.target.checked) {
                            setAttributes(attributes.concat(a.attributeCode));
                        }
                        else {
                            setAttributes(attributes.filter((attr) => a !== attr.attributeCode));
                        }
                    } }))),
                React.createElement("div", { className: "mt-8" },
                    React.createElement("a", { className: "text-interactive hover:underline", href: "#", onClick: (e) => onCreate(e) }, "Create")))),
            (((_c = data === null || data === void 0 ? void 0 : data.attributes) === null || _c === void 0 ? void 0 : _c.items) || []).length === 0 && (React.createElement("div", { className: "alert alert-danger", role: "alert" }, "There is no \"Select\" attribute available.")))));
}
CreateVariantGroup.propTypes = {
    createVariantGroupApi: PropTypes.string.isRequired,
    setGroup: PropTypes.func.isRequired
};
//# sourceMappingURL=CreateVariantGroup.js.map