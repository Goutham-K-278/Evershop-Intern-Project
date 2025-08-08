import CategoryTree from '@components/admin/catalog/productEdit/category/CategoryTree';
import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import Editor from '@components/common/form/fields/Editor';
import PropTypes from 'prop-types';
import React from 'react';
import { get } from '../../../../../lib/util/get.js';
function ParentCategory({ currentId, parent }) {
    const [selecting, setSelecting] = React.useState(false);
    const [category, setCategory] = React.useState(parent || null);
    return (React.createElement("div", { className: "mt-6 relative" },
        React.createElement("div", { className: "mb-4" }, "Parent category"),
        category && (React.createElement("div", { className: "border rounded border-[#c9cccf] mb-4 p-4" },
            category.path.map((item, index) => (React.createElement("span", { key: item.name, className: "text-gray-500" },
                item.name,
                index < category.path.length - 1 && ' > '))),
            React.createElement("span", { className: "text-interactive pl-8 hover:underline" },
                React.createElement("a", { href: "#", onClick: (e) => {
                        e.preventDefault();
                        setSelecting(true);
                    } }, "Change")),
            React.createElement("span", { className: "text-critical pl-8 hover:underline" },
                React.createElement("a", { href: "#", onClick: (e) => {
                        e.preventDefault();
                        setCategory(null);
                    } }, "Unlink")))),
        !selecting && !category && (React.createElement("a", { href: "#", onClick: (e) => {
                e.preventDefault();
                setSelecting(!selecting);
            }, className: "text-interactive" }, "Select category")),
        selecting && (React.createElement(CategoryTree, { selectedCategory: category, setSelectedCategory: (c) => {
                if (c.categoryId === currentId) {
                    return;
                }
                setCategory(c);
                setSelecting(false);
            } })),
        React.createElement("input", { type: "hidden", name: "parent_id", value: (category === null || category === void 0 ? void 0 : category.categoryId) || '' })));
}
ParentCategory.propTypes = {
    parent: PropTypes.shape({
        categoryId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        })).isRequired
    }),
    currentId: PropTypes.number
};
ParentCategory.defaultProps = {
    parent: null,
    currentId: null
};
export default function General({ category, browserApi, deleteApi, uploadApi, folderCreateApi }) {
    const fields = [
        {
            component: { default: Field },
            props: {
                id: 'name',
                name: 'name',
                label: 'Name',
                validationRules: ['notEmpty'],
                type: 'text'
            },
            sortOrder: 10,
            id: 'name'
        },
        {
            component: { default: ParentCategory },
            props: {
                parent: category === null || category === void 0 ? void 0 : category.parent,
                currentId: category === null || category === void 0 ? void 0 : category.categoryId
            },
            sortOrder: 15,
            id: 'parent'
        },
        {
            component: { default: Field },
            props: {
                id: 'categoryId',
                name: 'category_id',
                type: 'hidden'
            },
            sortOrder: 20
        },
        {
            component: { default: Editor },
            props: {
                id: 'description',
                name: 'description',
                label: 'Description',
                browserApi,
                deleteApi,
                uploadApi,
                folderCreateApi
            },
            sortOrder: 30
        }
    ].map((f) => {
        if (get(category, `${f.props.id}`) !== undefined) {
            f.props.value = get(category, `${f.props.id}`);
        }
        return f;
    });
    return (React.createElement(Card, { title: "General" },
        React.createElement(Card.Session, null,
            React.createElement(Area, { id: "categoryEditGeneral", coreComponents: fields }))));
}
General.propTypes = {
    browserApi: PropTypes.string.isRequired,
    deleteApi: PropTypes.string.isRequired,
    folderCreateApi: PropTypes.string.isRequired,
    uploadApi: PropTypes.string.isRequired,
    category: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            size: PropTypes.number.isRequired,
            columns: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                size: PropTypes.number.isRequired,
                data: PropTypes.object.isRequired
            }))
        })),
        categoryId: PropTypes.number,
        parent: PropTypes.shape({
            categoryId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            path: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string.isRequired
            })).isRequired
        })
    })
};
General.defaultProps = {
    category: {}
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 10
};
export const query = `
  query Query {
    category(id: getContextValue("categoryId", null)) {
      categoryId
      name
      description
      status
      parent {
        categoryId
        name
        path {
          name
        }
      }
    }
    browserApi: url(routeId: "fileBrowser", params: [{key: "0", value: ""}])
    deleteApi: url(routeId: "fileDelete", params: [{key: "0", value: ""}])
    uploadApi: url(routeId: "imageUpload", params: [{key: "0", value: ""}])
    folderCreateApi: url(routeId: "folderCreate")
  }
`;
//# sourceMappingURL=General.js.map