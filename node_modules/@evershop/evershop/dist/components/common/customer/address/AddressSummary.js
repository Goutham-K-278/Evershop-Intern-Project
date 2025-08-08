/* eslint-disable react/prop-types */
import Area from '@components/common/Area';
import React from 'react';
export function AddressSummary({ address }) {
    return (React.createElement(Area, { id: "addressSummary", className: "address__summary", coreComponents: [
            {
                component: {
                    default: ({ fullName }) => (React.createElement("div", { className: "full-name" }, fullName))
                },
                props: {
                    fullName: address.fullName
                },
                sortOrder: 10,
                id: 'fullName'
            },
            {
                component: {
                    default: ({ address1 }) => (React.createElement("div", { className: "address-one" }, address1))
                },
                props: {
                    address1: address.address1
                },
                sortOrder: 20,
                id: 'address1'
            },
            {
                component: {
                    default: ({ city, province, postcode, country }) => (React.createElement("div", { className: "city-province-postcode" },
                        React.createElement("div", null, `${postcode}, ${city}`),
                        React.createElement("div", null,
                            province && React.createElement("span", null,
                                province.name,
                                ", "),
                            ' ',
                            React.createElement("span", null, country.name))))
                },
                props: {
                    city: address.city,
                    province: address.province,
                    postcode: address.postcode,
                    country: address.country
                },
                sortOrder: 40,
                id: 'cityProvincePostcode'
            },
            {
                component: {
                    default: ({ telephone }) => (React.createElement("div", { className: "telephone" }, telephone))
                },
                props: {
                    telephone: address.telephone
                },
                sortOrder: 60,
                id: 'telephone'
            }
        ] }));
}
//# sourceMappingURL=AddressSummary.js.map