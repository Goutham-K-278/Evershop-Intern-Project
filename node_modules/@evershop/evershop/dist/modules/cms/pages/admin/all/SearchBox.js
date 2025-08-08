import { Input } from '@components/common/form/fields/Input';
import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useQuery } from 'urql';
import { NoResult } from './search/NoResult';
import { Results } from './search/Results';
import './SearchBox.scss';
const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};
const SearchQuery = `
  query Query ($filters: [FilterInput]) {
    customers(filters: $filters) {
      items {
        customerId
        uuid
        fullName
        email
        url: editUrl
      }
    }
    products(filters: $filters) {
      items {
        productId
        uuid
        sku
        name
        url: editUrl
      }
    }
    orders(filters: $filters) {
      items {
        orderId
        uuid
        orderNumber
        url: editUrl
      }
    }
  }
`;
export default function SearchBox({ resourceLinks }) {
    const [keyword, setKeyword] = React.useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const InputRef = useRef();
    const clickRef = React.useRef();
    const onClickOutside = () => {
        if (InputRef.current !== document.activeElement) {
            setShowResult(false);
        }
    };
    useClickOutside(clickRef, onClickOutside);
    const [result, reexecuteQuery] = useQuery({
        query: SearchQuery,
        variables: {
            filters: keyword
                ? [{ key: 'keyword', operation: 'eq', value: keyword }]
                : []
        },
        pause: true
    });
    const { data, fetching } = result;
    React.useEffect(() => {
        setLoading(true);
        if (keyword) {
            setShowResult(true);
        }
        else {
            setShowResult(false);
        }
        const timer = setTimeout(() => {
            if (keyword) {
                reexecuteQuery({ requestPolicy: 'network-only' });
                setLoading(false);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [keyword]);
    return (React.createElement("div", { className: "search-box" },
        React.createElement(Input, { prefix: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { width: '1.8rem', height: '1.8rem' }, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })), placeholder: "Search", ref: InputRef, onChange: (e) => setKeyword(e.target.value) }),
        showResult && (React.createElement("div", { className: "search-result", ref: clickRef },
            (loading || fetching) && (React.createElement("div", { className: "p-3 flex justify-center items-center" },
                React.createElement(Spinner, { width: 25, height: 25 }))),
            !keyword && (React.createElement("div", { className: "text-center" },
                React.createElement("span", null, "Search for products, order and other resources"))),
            (data === null || data === void 0 ? void 0 : data.products.items.length) === 0 &&
                (data === null || data === void 0 ? void 0 : data.customers.items.length) === 0 &&
                (data === null || data === void 0 ? void 0 : data.orders.items.length) === 0 &&
                keyword &&
                !loading && (React.createElement(NoResult, { keyword: keyword, resourseLinks: resourceLinks })),
            data &&
                !loading &&
                !fetching &&
                ((data === null || data === void 0 ? void 0 : data.products.items.length) > 0 ||
                    (data === null || data === void 0 ? void 0 : data.customers.items.length) > 0 ||
                    (data === null || data === void 0 ? void 0 : data.orders.items.length) > 0) && (React.createElement(Results, { keyword: keyword, results: data }))))));
}
SearchBox.propTypes = {
    resourceLinks: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string
    }))
};
SearchBox.defaultProps = {
    resourceLinks: []
};
export const layout = {
    areaId: 'header',
    sortOrder: 20
};
//# sourceMappingURL=SearchBox.js.map