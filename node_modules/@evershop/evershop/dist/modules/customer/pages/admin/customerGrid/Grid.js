import { Card } from '@components/admin/cms/Card';
import CreateAt from '@components/admin/customer/customerGrid/rows/CreateAt';
import CustomerNameRow from '@components/admin/customer/customerGrid/rows/CustomerName';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import { Checkbox } from '@components/common/form/fields/Checkbox';
import { Form } from '@components/common/form/Form';
import SortableHeader from '@components/common/grid/headers/Sortable';
import Pagination from '@components/common/grid/Pagination';
import BasicRow from '@components/common/grid/rows/BasicRow';
import StatusRow from '@components/common/grid/rows/StatusRow';
import Filter from '@components/common/list/Filter';
import { useAlertContext } from '@components/common/modal/Alert';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
function Actions({ customers = [], selectedIds = [] }) {
    const { openAlert, closeAlert } = useAlertContext();
    const updateCustomers = async (status) => {
        const promises = customers
            .filter((customer) => selectedIds.includes(customer.uuid))
            .map((customer) => axios.patch(customer.updateApi, {
            status
        }));
        await Promise.all(promises);
        // Refresh the page
        window.location.reload();
    };
    const actions = [
        {
            name: 'Disable',
            onAction: () => {
                openAlert({
                    heading: `Disable ${selectedIds.length} customers`,
                    content: 'Are you sure?',
                    primaryAction: {
                        title: 'Cancel',
                        onAction: closeAlert,
                        variant: 'primary'
                    },
                    secondaryAction: {
                        title: 'Disable',
                        onAction: async () => {
                            await updateCustomers(0);
                        },
                        variant: 'critical',
                        isLoading: false
                    }
                });
            }
        },
        {
            name: 'Enable',
            onAction: () => {
                openAlert({
                    heading: `Enable ${selectedIds.length} customers`,
                    content: 'Are you sure?',
                    primaryAction: {
                        title: 'Cancel',
                        onAction: closeAlert,
                        variant: 'primary'
                    },
                    secondaryAction: {
                        title: 'Enable',
                        onAction: async () => {
                            await updateCustomers(1);
                        },
                        variant: 'critical',
                        isLoading: false
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
    customers: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        updateApi: PropTypes.string.isRequired
    })).isRequired
};
export default function CustomerGrid({ customers: { items: customers, total, currentFilters = [] } }) {
    const page = currentFilters.find((filter) => filter.key === 'page')
        ? parseInt(currentFilters.find((filter) => filter.key === 'page').value, 10)
        : 1;
    const limit = currentFilters.find((filter) => filter.key === 'limit')
        ? parseInt(currentFilters.find((filter) => filter.key === 'limit').value, 10)
        : 20;
    const [selectedRows, setSelectedRows] = useState([]);
    return (React.createElement(Card, null,
        React.createElement(Card.Session, { title: React.createElement(Form, { submitBtn: false, id: "customerGridFilter" },
                React.createElement("div", { className: "flex gap-8 justify-center items-center" },
                    React.createElement(Area, { id: "customerGridFilter", noOuter: true, coreComponents: [
                            {
                                component: {
                                    default: () => {
                                        var _a;
                                        return (React.createElement(Field, { type: "text", id: "keyword", name: "keyword", placeholder: "Search", value: (_a = currentFilters.find((f) => f.key === 'keyword')) === null || _a === void 0 ? void 0 : _a.value, onKeyPress: (e) => {
                                                var _a;
                                                // If the user press enter, we should submit the form
                                                if (e.key === 'Enter') {
                                                    const url = new URL(document.location);
                                                    const keyword = (_a = document.getElementById('keyword')) === null || _a === void 0 ? void 0 : _a.value;
                                                    if (keyword) {
                                                        url.searchParams.set('keyword', keyword);
                                                    }
                                                    else {
                                                        url.searchParams.delete('keyword');
                                                    }
                                                    window.location.href = url;
                                                }
                                            } }));
                                    }
                                },
                                sortOrder: 5
                            },
                            {
                                component: {
                                    default: () => (React.createElement(Filter, { options: [
                                            {
                                                label: 'Enabled',
                                                value: '1',
                                                onSelect: () => {
                                                    const url = new URL(document.location);
                                                    url.searchParams.set('status', 1);
                                                    window.location.href = url;
                                                }
                                            },
                                            {
                                                label: 'Disabled',
                                                value: '0',
                                                onSelect: () => {
                                                    const url = new URL(document.location);
                                                    url.searchParams.set('status', 0);
                                                    window.location.href = url;
                                                }
                                            }
                                        ], selectedOption: currentFilters.find((f) => f.key === 'status')
                                            ? currentFilters.find((f) => f.key === 'status')
                                                .value === '1'
                                                ? 'Enabled'
                                                : 'Disabled'
                                            : undefined, title: "Status" }))
                                },
                                sortOrder: 10
                            }
                        ], currentFilters: currentFilters }))), actions: [
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
                                    setSelectedRows(customers.map((c) => c.uuid));
                                else
                                    setSelectedRows([]);
                            } })),
                    React.createElement(Area, { id: "customerGridHeader", noOuter: true, coreComponents: [
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { title: "Full Name", name: "full_name", currentFilters: currentFilters }))
                                },
                                sortOrder: 10
                            },
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { title: "Email", name: "email", currentFilters: currentFilters }))
                                },
                                sortOrder: 15
                            },
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { title: "Status", name: "status", currentFilters: currentFilters }))
                                },
                                sortOrder: 20
                            },
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { title: "Created At", name: "created_at", currentFilters: currentFilters }))
                                },
                                sortOrder: 25
                            }
                        ] }))),
            React.createElement("tbody", null,
                React.createElement(Actions, { customers: customers, selectedIds: selectedRows, setSelectedRows: setSelectedRows }),
                customers.map((c) => (React.createElement("tr", { key: c.customerId },
                    React.createElement("td", null,
                        React.createElement(Checkbox, { isChecked: selectedRows.includes(c.uuid), onChange: (e) => {
                                if (e.target.checked) {
                                    setSelectedRows(selectedRows.concat([c.uuid]));
                                }
                                else {
                                    setSelectedRows(selectedRows.filter((row) => row !== c.uuid));
                                }
                            } })),
                    React.createElement(Area, { id: "customerGridRow", row: c, noOuter: true, selectedRows: selectedRows, setSelectedRows: setSelectedRows, coreComponents: [
                            {
                                component: {
                                    default: () => (React.createElement(CustomerNameRow, { id: "name", name: c.fullName, url: c.editUrl }))
                                },
                                sortOrder: 10
                            },
                            {
                                component: {
                                    default: ({ areaProps }) => (React.createElement(BasicRow, { id: "email", areaProps: areaProps }))
                                },
                                sortOrder: 15
                            },
                            {
                                component: {
                                    default: ({ areaProps }) => (React.createElement(StatusRow, { id: "status", areaProps: areaProps }))
                                },
                                sortOrder: 20
                            },
                            {
                                component: {
                                    default: () => React.createElement(CreateAt, { time: c.createdAt.text })
                                },
                                sortOrder: 25
                            }
                        ] })))))),
        customers.length === 0 && (React.createElement("div", { className: "flex w-full justify-center" }, "There is no customer to display")),
        React.createElement(Pagination, { total: total, limit: limit, page: page })));
}
CustomerGrid.propTypes = {
    customers: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            customerId: PropTypes.number.isRequired,
            uuid: PropTypes.string.isRequired,
            fullName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            status: PropTypes.number.isRequired,
            createdAt: PropTypes.shape({
                value: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired,
            editUrl: PropTypes.string.isRequired,
            updateApi: PropTypes.string.isRequired
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
    customers (filters: $filters) {
      items {
        customerId
        uuid
        fullName
        email
        status
        createdAt {
          value
          text
        }
        editUrl
        updateApi
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