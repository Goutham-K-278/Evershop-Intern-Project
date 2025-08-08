import { Card } from '@components/admin/cms/Card';
import PageName from '@components/admin/cms/cmsPageGrid/rows/PageName';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import { Checkbox } from '@components/common/form/fields/Checkbox';
import { Form } from '@components/common/form/Form';
import SortableHeader from '@components/common/grid/headers/Sortable';
import Pagination from '@components/common/grid/Pagination';
import StatusRow from '@components/common/grid/rows/StatusRow';
import { useAlertContext } from '@components/common/modal/Alert';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
function Actions({ pages = [], selectedIds = [] }) {
    const { openAlert, closeAlert } = useAlertContext();
    const [isLoading, setIsLoading] = useState(false);
    const updatePages = async (status) => {
        setIsLoading(true);
        const promises = pages
            .filter((page) => selectedIds.includes(page.uuid))
            .map((page) => axios.patch(page.updateApi, {
            status
        }));
        await Promise.all(promises);
        setIsLoading(false);
        // Refresh the page
        window.location.reload();
    };
    const deletePages = async () => {
        setIsLoading(true);
        const promises = pages
            .filter((page) => selectedIds.includes(page.uuid))
            .map((page) => axios.delete(page.deleteApi));
        await Promise.all(promises);
        setIsLoading(false);
        // Refresh the page
        window.location.reload();
    };
    const actions = [
        {
            name: 'Disable',
            onAction: () => {
                openAlert({
                    heading: `Disable ${selectedIds.length} pages`,
                    content: 'Are you sure?',
                    primaryAction: {
                        title: 'Cancel',
                        onAction: closeAlert,
                        variant: 'primary'
                    },
                    secondaryAction: {
                        title: 'Disable',
                        onAction: async () => {
                            await updatePages(0);
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
                    heading: `Enable ${selectedIds.length} pages`,
                    content: 'Are you sure?',
                    primaryAction: {
                        title: 'Cancel',
                        onAction: closeAlert,
                        variant: 'primary'
                    },
                    secondaryAction: {
                        title: 'Enable',
                        onAction: async () => {
                            await updatePages(1);
                        },
                        variant: 'critical',
                        isLoading: false
                    }
                });
            }
        },
        {
            name: 'Delete',
            onAction: () => {
                openAlert({
                    heading: `Delete ${selectedIds.length} pages`,
                    content: React.createElement("div", null, "Can't be undone"),
                    primaryAction: {
                        title: 'Cancel',
                        onAction: closeAlert,
                        variant: 'primary'
                    },
                    secondaryAction: {
                        title: 'Delete',
                        onAction: async () => {
                            await deletePages();
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
    pages: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        updateApi: PropTypes.string.isRequired,
        deleteApi: PropTypes.string.isRequired
    })).isRequired
};
export default function CMSPageGrid({ cmsPages: { items: pages, total, currentFilters = [] } }) {
    const page = currentFilters.find((filter) => filter.key === 'page')
        ? parseInt(currentFilters.find((filter) => filter.key === 'page').value, 10)
        : 1;
    const limit = currentFilters.find((filter) => filter.key === 'limit')
        ? parseInt(currentFilters.find((filter) => filter.key === 'limit').value, 10)
        : 20;
    const [selectedRows, setSelectedRows] = useState([]);
    return (React.createElement(Card, null,
        React.createElement(Card.Session, { title: React.createElement(Form, { submitBtn: false, id: "pageGridFilter" },
                React.createElement(Area, { id: "cmsPageGridFilter", noOuter: true, coreComponents: [
                        {
                            component: {
                                default: () => {
                                    var _a;
                                    return (React.createElement(Field, { type: "text", id: "name", name: "name", placeholder: "Search", value: (_a = currentFilters.find((f) => f.key === 'name')) === null || _a === void 0 ? void 0 : _a.value, onKeyPress: (e) => {
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
                                        } }));
                                }
                            },
                            sortOrder: 10
                        }
                    ] })), actions: [
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
                                if (e.target.checked) {
                                    setSelectedRows(pages.map((p) => p.uuid));
                                }
                                else {
                                    setSelectedRows([]);
                                }
                            } })),
                    React.createElement(Area, { className: "", id: "pageGridHeader", noOuter: true, coreComponents: [
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { title: "Name", name: "name", currentFilters: currentFilters }))
                                },
                                sortOrder: 10
                            },
                            {
                                component: {
                                    default: () => (React.createElement(SortableHeader, { title: "Status", name: "status", currentFilters: currentFilters }))
                                },
                                sortOrder: 20
                            }
                        ] }))),
            React.createElement("tbody", null,
                React.createElement(Actions, { pages: pages, selectedIds: selectedRows, setSelectedRows: setSelectedRows }),
                pages.map((p, i) => (React.createElement("tr", { key: i },
                    React.createElement("td", { style: { width: '2rem' } },
                        React.createElement(Checkbox, { isChecked: selectedRows.includes(p.uuid), onChange: (e) => {
                                if (e.target.checked) {
                                    setSelectedRows(selectedRows.concat([p.uuid]));
                                }
                                else {
                                    setSelectedRows(selectedRows.filter((row) => row !== p.uuid));
                                }
                            } })),
                    React.createElement(Area, { className: "", id: "pageGridRow", row: p, noOuter: true, coreComponents: [
                            {
                                component: {
                                    default: () => React.createElement(PageName, { url: p.editUrl, name: p.name })
                                },
                                sortOrder: 10
                            },
                            {
                                component: {
                                    default: ({ areaProps }) => (React.createElement(StatusRow, { id: "status", areaProps: areaProps }))
                                },
                                sortOrder: 20
                            }
                        ] })))))),
        pages.length === 0 && (React.createElement("div", { className: "flex w-full justify-center" }, "There is no page to display")),
        React.createElement(Pagination, { total: total, limit: limit, page: page })));
}
CMSPageGrid.propTypes = {
    cmsPages: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            updateApi: PropTypes.string.isRequired,
            deleteApi: PropTypes.string.isRequired
        })).isRequired,
        total: PropTypes.number.isRequired,
        currentFilters: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            operation: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }))
    }).isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 20
};
export const query = `
  query Query($filters: [FilterInput]) {
    cmsPages (filters: $filters) {
      items {
        cmsPageId
        uuid
        name
        status
        content
        editUrl
        updateApi
        deleteApi
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