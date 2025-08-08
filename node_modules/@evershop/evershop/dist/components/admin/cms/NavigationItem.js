import React from 'react';
import './NavigationItem.scss';
export function NavigationItem({ Icon, url, title }) {
    const [isActive, setIsActive] = React.useState(false);
    React.useEffect(() => {
        const currentUrl = window.location.href;
        const baseUrl = window.location.origin;
        const check = currentUrl.split(baseUrl + url);
        if (check.length === 2 && url.indexOf('products/new') === -1) {
            // TODO: Fix me
            if (url.split('/').length === 2) {
                if (check[1] === '' || !/^\/[a-zA-Z1-9]/.test(check[1])) {
                    setIsActive(true);
                }
            }
            else {
                setIsActive(true);
            }
        }
    }, []);
    return (React.createElement("li", { className: isActive ? 'active nav-item' : 'nav-item' },
        React.createElement("a", { href: url, className: "flex justify-left" },
            React.createElement("i", { className: "menu-icon" },
                React.createElement(Icon, null)),
            title)));
}
//# sourceMappingURL=NavigationItem.js.map