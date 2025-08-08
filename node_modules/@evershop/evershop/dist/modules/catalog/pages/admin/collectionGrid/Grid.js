import CollectionNameRow from '@components/admin/catalog/collectionGrid/rows/CollectionNameRow';
import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import { Checkbox } from '@components/common/form/fields/Checkbox';
import { Form } from '@components/common/form/Form';
import DummyColumnHeader from '@components/common/grid/headers/Dummy';
import SortableHeader from '@components/common/grid/headers/Sortable';
import Pagination from '@components/common/grid/Pagination';
import TextRow from '@components/common/grid/rows/TextRow';
import { useAlertContext } from '@components/common/modal/Alert';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
function Actions({ collections = [], selectedIds = [] }) {
    const { openAlert, closeAlert } = useAlertContext();
    const [isLoading, setIsLoading] = useState(false);
    const deleteCategories = async () => {
        setIsLoading(true);
        const promises = collections
            .filter((c) => selectedIds.includes(c.uuid))
            .map((col) => axios.delete(col.deleteApi));
        await Promise.all(promises);
        setIsLoading(false);
        // Refresh the page
        window.location.reload();
    };
    const actions = [
        {
            name: 'Delete',
            onAction: () => {
                openAlert({
                    heading: `Delete ${selectedIds.length} collections`,
                    content: React.createElement("div", null, "Can't be undone"),
                    primaryAction: {
                        title: 'Cancel',
                        onAction: closeAlert,
                        variant: 'primary'
                    },
                    secondaryAction: {
                        title: 'Delete',
                        onAction: async () => {
                            await deleteCategories();
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
                actions.map((action, index) => (React.createElement("a", { key: index, href: "#", onClick: (e) => {
                        e.preventDefault();
                        action.onAction();
                    }, className: "font-semibold pt-3 pb-3 pl-6 pr-6 block border-l border-divider self-center" },
                    React.createElement("span", null, action.name)))))))));
}
Actions.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    collections: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired
    })).isRequired
};
export default function CollectionGrid({ collections: { items: collections, total, currentFilters = [] } }) {
    var _a;
    const page = currentFilters.find((filter) => filter.key === 'page')
        ? parseInt(currentFilters.find((filter) => filter.key === 'page').value, 10)
        : 1;
    const limit = currentFilters.find((filter) => filter.key === 'limit')
        ? parseInt(currentFilters.find((filter) => filter.key === 'limit').value, 10)
        : 20;
    const [selectedRows, setSelectedRows] = useState([]);
    return (React.createElement("div", { className: "w-2/3", style: { margin: '0 auto' } },
        React.createElement(Card, null,
            React.createElement(Card.Session, { title: React.createElement(Form, { submitBtn: false, id: "collectionGridFilter" },
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
                                    if (e.target.checked) {
                                        setSelectedRows(collections.map((c) => c.uuid));
                                    }
                                    else {
                                        setSelectedRows([]);
                                    }
                                } })),
                        React.createElement(Area, { className: "", id: "collectionGridHeader", noOuter: true, coreComponents: [
                                {
                                    component: {
                                        default: () => (React.createElement(DummyColumnHeader, { title: "ID", id: "collectionId", currentFilters: currentFilters }))
                                    },
                                    sortOrder: 5
                                },
                                {
                                    component: {
                                        default: () => (React.createElement(SortableHeader, { title: "Collection Name", name: "name", currentFilters: currentFilters }))
                                    },
                                    sortOrder: 10
                                },
                                {
                                    component: {
                                        default: () => (React.createElement(SortableHeader, { title: "Code", name: "code", currentFilters: currentFilters }))
                                    },
                                    sortOrder: 15
                                }
                            ] }))),
                React.createElement("tbody", null,
                    React.createElement(Actions, { collections: collections, selectedIds: selectedRows, setSelectedRows: setSelectedRows }),
                    collections.map((c) => (React.createElement("tr", { key: c.collectionId },
                        React.createElement("td", { style: { width: '2rem' } },
                            React.createElement(Checkbox, { isChecked: selectedRows.includes(c.uuid), onChange: (e) => {
                                    if (e.target.checked)
                                        setSelectedRows(selectedRows.concat([c.uuid]));
                                    else
                                        setSelectedRows(selectedRows.filter((r) => r !== c.uuid));
                                } })),
                        React.createElement(Area, { className: "", id: "collectionGridRow", row: c, noOuter: true, coreComponents: [
                                {
                                    component: {
                                        default: () => (React.createElement(TextRow, { text: c.collectionId.toString() }))
                                    },
                                    sortOrder: 5
                                },
                                {
                                    component: {
                                        default: () => (React.createElement(CollectionNameRow, { id: "name", name: c.name, url: c.editUrl }))
                                    },
                                    sortOrder: 10
                                },
                                {
                                    component: {
                                        default: () => React.createElement(TextRow, { text: c.code })
                                    },
                                    sortOrder: 15
                                }
                            ] })))))),
            collections.length === 0 && (React.createElement("div", { className: "flex w-full justify-center" }, "There is no collections to display")),
            React.createElement(Pagination, { total: total, limit: limit, page: page }))));
}
CollectionGrid.propTypes = {
    collections: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            collectionId: PropTypes.number.isRequired,
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            editUrl: PropTypes.string.isRequired,
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
    collections (filters: $filters) {
      items {
        collectionId
        uuid
        name
        code
        editUrl
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