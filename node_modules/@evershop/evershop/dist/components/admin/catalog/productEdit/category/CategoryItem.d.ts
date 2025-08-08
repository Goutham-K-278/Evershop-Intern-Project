export default CategoryItem;
declare function CategoryItem({ category, selectedCategory, setSelectedCategory }: {
    category: any;
    selectedCategory: any;
    setSelectedCategory: any;
}): React.JSX.Element;
declare namespace CategoryItem {
    namespace propTypes {
        let category: any;
        let selectedCategory: any;
        let setSelectedCategory: any;
    }
    namespace defaultProps {
        let category_1: {};
        export { category_1 as category };
        let selectedCategory_1: {};
        export { selectedCategory_1 as selectedCategory };
    }
}
import React from 'react';
