import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
import CategoryItem from './CategoryItem';
import './CategoryTree.scss';
CategoryTree.propTypes = {};
const categoriesQuery = `
  query Query ($filters: [FilterInput]) {
    categories (filters: $filters) {
      items {
        categoryId,
        name
        path {
          name
        }
      }
    }
  }
`;
function CategoryTree({ selectedCategory, setSelectedCategory }) {
    const [result] = useQuery({
        query: categoriesQuery,
        variables: {
            filters: [{ key: 'parent', operation: 'eq', value: null }]
        }
    });
    const { data, fetching, error } = result;
    if (fetching) {
        return (React.createElement("div", { className: "category-tree-container absolute top-full left-0 right-0 border rounded" },
            React.createElement(Spinner, { width: 30, height: 30 })));
    }
    if (error) {
        return (React.createElement("div", { className: "category-tree-container absolute top-full left-0 right-0 border rounded" },
            React.createElement("p", { className: "text-critical" }, error.message)));
    }
    if (data.categories.items.length === 0) {
        return (React.createElement("div", { className: "category-tree-container absolute top-full left-0 right-0 border rounded" },
            React.createElement("div", null, "There is no category")));
    }
    return (React.createElement("div", { className: "category-tree-container absolute top-full left-0 right-0 border rounded" },
        React.createElement("ul", { className: "category-tree" }, data.categories.items.map((category) => (React.createElement(CategoryItem, { key: category.value, category: category, selectedCategory: selectedCategory, setSelectedCategory: setSelectedCategory }))))));
}
CategoryTree.propTypes = {
    selectedCategory: PropTypes.shape({
        categoryId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        })),
        children: PropTypes.arrayOf(PropTypes.shape({
            categoryId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            path: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string.isRequired
            }))
        }))
    }),
    setSelectedCategory: PropTypes.func.isRequired
};
CategoryTree.defaultProps = {
    selectedCategory: {}
};
export default CategoryTree;
//# sourceMappingURL=CategoryTree.js.map