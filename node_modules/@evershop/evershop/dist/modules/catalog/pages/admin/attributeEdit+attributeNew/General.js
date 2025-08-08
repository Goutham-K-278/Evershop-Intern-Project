import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import { Input } from '@components/common/form/fields/Input';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { useQuery } from 'urql';
import { get } from '../../../../../lib/util/get.js';
const GroupsQuery = `
  query Query {
    attributeGroups {
      items {
        value: attributeGroupId
        label: groupName
      }
    }
  }
`;
function Groups({ groups, createGroupApi }) {
    const [result, reexecuteQuery] = useQuery({
        query: GroupsQuery
    });
    const newGroup = React.useRef(null);
    const [createGroupError, setCreateGroupError] = React.useState(null);
    const { data, fetching, error } = result;
    const createGroup = () => {
        if (!newGroup.current.value) {
            setCreateGroupError('Group name is required');
            return;
        }
        fetch(createGroupApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ group_name: newGroup.current.value })
        })
            .then((response) => response.json())
            .then((jsonData) => {
            if (!jsonData.error) {
                newGroup.current.value = '';
                reexecuteQuery({ requestPolicy: 'network-only' });
            }
            else {
                setCreateGroupError(jsonData.error.message);
            }
        });
    };
    if (fetching)
        return React.createElement("p", null, "Loading...");
    if (error) {
        return (React.createElement("p", null,
            "Oh no...",
            error.message));
    }
    return (React.createElement("div", null,
        React.createElement("div", { className: "mb-4" }, "Select groups the attribute belongs to"),
        React.createElement("div", { className: "grid gap-8 grid-cols-2" },
            React.createElement("div", null,
                React.createElement(Select, { name: "groups[]", options: data.attributeGroups.items, hideSelectedOptions: true, isMulti: true, defaultValue: groups })),
            React.createElement("div", { className: "grid gap-8 grid-cols-1" },
                React.createElement("div", null,
                    React.createElement(Input, { type: "text", placeholder: "Create a new group", ref: newGroup, error: createGroupError, suffix: React.createElement("a", { className: "text-interactive", href: "#", onClick: (e) => {
                                e.preventDefault();
                                createGroup();
                            } },
                            React.createElement("svg", { width: "1.5rem", height: "1.5rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" }))) }))))));
}
Groups.propTypes = {
    createGroupApi: PropTypes.string.isRequired,
    groups: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
    })).isRequired
};
function Options({ originOptions = [] }) {
    const [options, setOptions] = React.useState(originOptions);
    const addOption = (e) => {
        e.preventDefault();
        setOptions(options.concat({
            optionId: Math.floor(Math.random() * (9000000 - 1000000)) + 1000000,
            uuid: Math.floor(Math.random() * (9000000 - 1000000)) + 1000000,
            optionText: ''
        }));
    };
    const removeOption = (uuid, e) => {
        e.preventDefault();
        const newOptions = options.filter((option) => option.uuid !== uuid);
        setOptions(newOptions);
    };
    return (React.createElement("div", { className: "attribute-edit-options" },
        options.map((option, index) => {
            const { uuid, optionId, optionText } = option;
            return (React.createElement("div", { key: uuid, className: "flex mb-2 space-x-8" },
                React.createElement("div", null,
                    React.createElement(Field, { key: uuid, type: "text", name: `options[${index}][option_text]`, formId: "attribute-edit-form", value: optionText, validationRules: ['notEmpty'] }),
                    React.createElement("input", { type: "hidden", name: `options[${index}][option_id]`, value: optionId })),
                React.createElement("div", { className: "self-center" },
                    React.createElement("a", { href: "#", onClick: (e) => removeOption(uuid, e), className: "text-critical hover:underline" }, "Remove option"))));
        }),
        React.createElement("div", { className: "mt-4" },
            React.createElement("a", { href: "#", onClick: (e) => addOption(e), className: "text-interactive hover:underline" }, "Add option"))));
}
Options.propTypes = {
    originOptions: PropTypes.arrayOf(PropTypes.shape({
        optionId: PropTypes.string,
        optionText: PropTypes.string
    })).isRequired
};
export default function General({ attribute, createGroupApi }) {
    const [type, setType] = React.useState(attribute === null || attribute === void 0 ? void 0 : attribute.type);
    const fields = [
        {
            component: { default: Field },
            props: {
                id: 'attributeName',
                name: 'attribute_name',
                label: 'Name',
                validationRules: ['notEmpty'],
                type: 'text'
            },
            sortOrder: 10
        },
        {
            component: { default: Field },
            props: {
                id: 'attributeCode',
                name: 'attribute_code',
                label: 'Attribute code',
                validationRules: ['notEmpty'],
                type: 'text'
            },
            sortOrder: 15
        },
        {
            component: { default: Field },
            props: {
                id: 'attributeId',
                name: 'attribute_id',
                type: 'hidden'
            },
            sortOrder: 10
        },
        {
            component: { default: Field },
            props: {
                id: 'type',
                type: 'radio',
                name: 'type',
                label: 'Type',
                options: [
                    { value: 'text', text: 'Text' },
                    { value: 'select', text: 'Select' },
                    { value: 'multiselect', text: 'Multiselect' },
                    { value: 'textarea', text: 'Textarea' }
                ],
                onChange: (value) => {
                    setType(value);
                }
            },
            sortOrder: 20
        }
    ].map((f) => {
        if (get(attribute, `${f.props.id}`) !== undefined) {
            f.props.value = get(attribute, `${f.props.id}`);
        }
        return f;
    });
    return (React.createElement(Card, { title: "General" },
        React.createElement(Card.Session, null,
            React.createElement(Area, { id: "attributeEditGeneral", coreComponents: fields })),
        ['select', 'multiselect'].includes(type) && (React.createElement(Card.Session, { title: "Attribute options" },
            React.createElement(Options, { originOptions: get(attribute, 'options', []) }))),
        React.createElement(Card.Session, { title: "Attribute Group" },
            React.createElement(Groups, { groups: get(attribute, 'groups.items', []), createGroupApi: createGroupApi }))));
}
General.propTypes = {
    attribute: PropTypes.shape({
        type: PropTypes.string.isRequired,
        attributeId: PropTypes.string,
        attributeName: PropTypes.string,
        attributeCode: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.shape({
            optionId: PropTypes.string,
            optionText: PropTypes.string
        })),
        groups: PropTypes.shape({
            items: PropTypes.arrayOf(PropTypes.shape({
                value: PropTypes.string,
                label: PropTypes.string
            }))
        })
    }),
    createGroupApi: PropTypes.string.isRequired
};
General.defaultProps = {
    attribute: {
        type: 'text'
    }
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 10
};
export const query = `
  query Query {
    attribute(id: getContextValue("attributeId", null)) {
      attributeId
      attributeName
      attributeCode
      type
      options {
        optionId: attributeOptionId
        uuid
        optionText
      }
      groups {
        items {
          value: attributeGroupId
          label: groupName
        }
      }
    }
    createGroupApi: url(routeId: "createAttributeGroup")
  }
`;
//# sourceMappingURL=General.js.map