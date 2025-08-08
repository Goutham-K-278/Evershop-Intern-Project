import AttributeNameRow from '@components/admin/catalog/attributeGrid/rows/AttributeName';
import GroupRow from '@components/admin/catalog/attributeGrid/rows/GroupRow';
import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import { Checkbox } from '@components/common/form/fields/Checkbox';
import { Form } from '@components/common/form/Form';
import DummyColumnHeader from '@components/common/grid/headers/Dummy';
import SortableHeader from '@components/common/grid/headers/Sortable';
import Pagination from '@components/common/grid/Pagination';
import BasicRow from '@components/common/grid/rows/BasicRow';
import YesNoRow from '@components/common/grid/rows/YesNoRow';
import { useAlertContext } from '@components/common/modal/Alert';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
function Actions({ attributes = [], selectedIds = [] }) {
    const { openAlert, closeAlert } = useAlertContext();
    const [isLoading, setIsLoading] = useState(false);
    const deleteAttributes = async () => {
        setIsLoading(true);
        try {
            const promises = attributes
                .filter((attribute) => selectedIds.includes(attribute.uuid))
                .map((attribute) => axios.delete(attribute.deleteApi, {
                validateStatus: () => true
            }));
            const responses = await Promise.allSettled(promises);
            setIsLoading(false);
            responses.forEach((response) => {
                // Get the axios response status code
                const { status } = response.value;
                if (status !== 200) {
                    throw new Error(response.value.data.error.message);
                }
            });
            // Refresh the page
            window.location.reload();
        }
        catch (e) {
            setIsLoading(false);
            toast.error(e.message);
        }
    };
    const actions = [
        {
            name: 'Delete',
            onAction: () => {
                openAlert({
                    heading: `Delete ${selectedIds.length} attributes`,
                    content: React.createElement("div", null, "Can't be undone"),
                    primaryAction: {
                        title: 'Cancel',
                        onAction: closeAlert,
                        variant: 'primary'
                    },
                    secondaryAction: {
                        title: 'Delete',
                        onAction: async () => {
                            await deleteAttributes();
                        },
                        variant: 'critical',
                        isLoading
                    }
                });
            }
        }
    ];
    return (React.createElement("tr", null,
        selectedIds.length === 0 && null,
        selectedIds.length > 0 && (React.createElement("td", { style: { borderTop: 0 }, colSpan: "100" },
            React.createElement("div", { className: "inline-flex border border-divider rounded justify-items-start" },
                React.createElement("a", { href: "#", className: "font-semibold pt-3 pb-3 pl-6 pr-6" },
                    selectedIds.length,
                    " selected"),
                actions.map((action, i) => (React.createElement("a", { key: i, href: "#", onClick: (e) => {
                        e.preventDefault();
                        action.onAction();
                    }, className: "font-semibold pt-3 pb-3 pl-6 pr-6 block border-l border-divider self-center" },
                    React.createElement("span", null, action.name)))))))));
}
Actions.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    attributes: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        deleteApi: PropTypes.string.isRequired
    })).isRequired
};
export default function AttributeGrid({ attributes: { items: attributes, total, currentFilters = [] } }) {
    var _a;
    const page = currentFilters.find((filter) => filter.key === 'page')
        ? parseInt(currentFilters.find((filter) => filter.key === 'page').value, 10)
        : 1;
    const limit = currentFilters.find((filter) => filter.key === 'limit')
        ? parseInt(currentFilters.find((filter) => filter.key === 'limit').value, 10)
        : 20;
    const [selectedRows, setSelectedRows] = useState([]);
    return (React.createElement(Card, null,
        React.createElement(Card.Session, { title: React.createElement(Form, { submitBtn: false, id: "attributeGridFilter" },
                React.createElement(Field, { type: "text", id: "name", name: "name", placeholder: "Search", value: (_a = currentFilters.find((f) => f.key === 'name')) === null || _a === void 0 ? void 0 : _a.value, onKeyPress: (e) => {
                        var _a;
                        // If the user press enter, we should submit the form
                        if (e.key === 'Enter') {
                            const url = new URL(document.location);
                            const name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
                            if (name) {
                                url.searchParams.set('name[operation]', 'like');
                                url.searchParams.set('name[value]', name);
                            }
                            else {
                                url.searchParams.delete('name[operation]');
                                url.searchParams.delete('name[value]');
                            }
                            window.location.href = url;
                        }
                    } })), actions: [
                {
                    variant: 'interactive',
                    name: 'Clear filter',
                    onAction: () => {
                        // Just get the url and remove all query params
                        const url = new URL(document.location);
                        url.search = '';
                        window.location.href = url.href;
                    }
                }
            ] }),
        React.createElement("table", { className: "listing sticky" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { className: "align-bottom" },
                        React.createElement(Checkbox, { onChange: (e) => {
                                if (e.target.checked)
                                    setSelectedRows(attributes.map((a) => a.uuid));
                                else
                                    setSelectedRows([]);
                            } })),
                    React.createElement(Area, { className: "", id: "attributeGridHeader", noOuter: true, coreComponents: [
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { name: "name", title: "Attribute Name", currentFilters: currentFilters }))
                                },
                                sortOrder: 10
                            },
                            {
                                component: {
                                    default: () => React.createElement(DummyColumnHeader, { title: "Groups" })
                                },
                                sortOrder: 15
                            },
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { name: "type", title: "Type", currentFilters: currentFilters }))
                                },
                                sortOrder: 20
                            },
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { name: "is_required", title: "Is Required?", currentFilters: currentFilters }))
                                },
                                sortOrder: 25
                            },
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { name: "is_filterable", title: "Is Filterable?", currentFilters: currentFilters }))
                                },
                                sortOrder: 30
                            }
                        ] }))),
            React.createElement("tbody", null,
                React.createElement(Actions, { attributes: attributes, selectedIds: selectedRows, setSelectedRows: setSelectedRows }),
                attributes.map((a) => (React.createElement("tr", { key: a.attributeId },
                    React.createElement("td", null,
                        React.createElement(Checkbox, { isChecked: selectedRows.includes(a.uuid), onChange: (e) => {
                                if (e.target.checked) {
                                    setSelectedRows(selectedRows.concat([a.uuid]));
                                }
                                else {
                                    setSelectedRows(selectedRows.filter((r) => r !== a.uuid));
                                }
                            } })),
                    React.createElement(Area, { className: "", id: "attributeGridRow", row: a, noOuter: true, coreComponents: [
                            {
                                component: {
                                    default: () => (React.createElement(AttributeNameRow, { id: "name", name: a.attributeName, url: a.editUrl }))
                                },
                                sortOrder: 10
                            },
                            {
                                component: {
                                    default: () => { var _a; return React.createElement(GroupRow, { groups: (_a = a.groups) === null || _a === void 0 ? void 0 : _a.items }); }
                                },
                                sortOrder: 15
                            },
                            {
                                component: {
                                    default: ({ areaProps }) => (React.createElement(BasicRow, { id: "type", areaProps: areaProps }))
                                },
                                sortOrder: 20
                            },
                            {
                                component: {
                                    default: () => React.createElement(YesNoRow, { value: a.isRequired })
                                },
                                sortOrder: 25
                            },
                            {
                                component: {
                                    default: () => React.createElement(YesNoRow, { value: a.isFilterable })
                                },
                                sortOrder: 30
                            }
                        ] })))))),
        attributes.length === 0 && (React.createElement("div", { className: "flex w-full justify-center" }, "There is no attribute to display")),
        React.createElement(Pagination, { total: total, limit: limit, page: page })));
}
AttributeGrid.propTypes = {
    attributes: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            attributeId: PropTypes.string.isRequired,
            attributeName: PropTypes.string.isRequired,
            attributeCode: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            isRequired: PropTypes.number.isRequired,
            isFilterable: PropTypes.number.isRequired,
            editUrl: PropTypes.string.isRequired,
            updateApi: PropTypes.string.isRequired,
            deleteApi: PropTypes.string.isRequired
        })).isRequired,
        total: PropTypes.number.isRequired,
        currentFilters: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            operation: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 20
};
export const query = `
  query Query($filters: [FilterInput]) {
    attributes (filters: $filters) {
      items {
        attributeId
        uuid
        attributeName
        attributeCode
        type
        isRequired
        isFilterable
        editUrl
        updateApi
        deleteApi
        groups {
          items {
            attributeGroupId
            groupName
            updateApi
          }
        }
      }
      total
      currentFilters {
        key
        operation
        value
      }
    }
  }
`;
export const variables = `
{
  filters: getContextValue('filtersFromUrl')
}`;
//# sourceMappingURL=Grid.js.map