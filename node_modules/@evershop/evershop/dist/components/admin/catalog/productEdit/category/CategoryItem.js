import Spinner from '@components/common/Spinner';
import MinusSmall from '@heroicons/react/outline/MinusSmIcon';
import PlusSmall from '@heroicons/react/outline/PlusSmIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
const childrenQuery = `
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
function CategoryItem({ category, selectedCategory, setSelectedCategory }) {
    const [expanded, setExpanded] = React.useState(false);
    const [result] = useQuery({
        query: childrenQuery,
        variables: {
            filters: [{ key: 'parent', operation: 'eq', value: category.categoryId }]
        },
        pause: !expanded
    });
    const { data, fetching, error } = result;
    if (error) {
        return React.createElement("p", { className: "text-critical" }, error.message);
    }
    return (React.createElement("li", null,
        React.createElement("div", { className: "flex justify-start gap-4 items-center" },
            !category.children && (React.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    setExpanded(!expanded);
                } }, expanded ? (React.createElement(MinusSmall, { width: 15, height: 15 })) : (React.createElement(PlusSmall, { width: 15, height: 15 })))),
            fetching && (React.createElement("span", null,
                React.createElement(Spinner, { width: 20, height: 20 }))),
            React.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    setSelectedCategory(category);
                } }, category.categoryId === (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.categoryId) ? (React.createElement("strong", null, category.name)) : (category.name))),
        data && data.categories.items.length > 0 && expanded && (React.createElement("ul", null, data.categories.items.map((child) => (React.createElement(CategoryItem, { key: child.value, category: child, selectedCategory: selectedCategory, setSelectedCategory: setSelectedCategory })))))));
}
CategoryItem.propTypes = {
    category: PropTypes.shape({
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
    selectedCategory: PropTypes.shape({
        categoryId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        }))
    }),
    setSelectedCategory: PropTypes.func.isRequired
};
CategoryItem.defaultProps = {
    category: {},
    selectedCategory: {}
};
export default CategoryItem;
//# sourceMappingURL=CategoryItem.js.map