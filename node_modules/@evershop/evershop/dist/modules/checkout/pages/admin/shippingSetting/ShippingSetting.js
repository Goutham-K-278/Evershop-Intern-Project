import ZoneForm from '@components/admin/checkout/shippingSetting/ZoneForm';
import { Zones } from '@components/admin/checkout/shippingSetting/Zones';
import { Card } from '@components/admin/cms/Card';
import SettingMenu from '@components/admin/setting/SettingMenu';
import Button from '@components/common/form/Button';
import { useModal } from '@components/common/modal/useModal';
import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
const CountriesQuery = `
  query Country($countries: [String]) {
    countries (countries: $countries) {
      value: code
      label: name
      provinces {
        value: code
        label: name
      }
    }
  }
`;
const ZonesQuery = `
  query Zones {
    shippingZones {
      uuid
      name
      country {
        name
        code
      }
      provinces {
        name
        code
      }
      methods {
        methodId
        uuid
        name
        cost {
          text
          value
        }
        priceBasedCost {
          minPrice {
            value
            text
          }
          cost {
            value
            text
          }
        }
        weightBasedCost {
          minWeight {
            value
            text
          }
          cost {
            value
            text
          }
        }
        isEnabled
        conditionType
        calculateApi
        max
        min
        updateApi
        deleteApi
      }
      updateApi
      deleteApi
      addMethodApi
    }
  }
`;
export default function ShippingSetting({ createShippingZoneApi }) {
    const modal = useModal();
    const [countriesQueryData] = useQuery({
        query: CountriesQuery
    });
    const [zonesQueryData, reexecuteQuery] = useQuery({
        query: ZonesQuery
    });
    return (React.createElement("div", { className: "main-content-inner" },
        React.createElement("div", { className: "grid grid-cols-6 gap-x-8 grid-flow-row " },
            React.createElement("div", { className: "col-span-2" },
                React.createElement(SettingMenu, null)),
            React.createElement("div", { className: "col-span-4" }, countriesQueryData.fetching || zonesQueryData.fetching ? (React.createElement(Card.Session, { title: "Shipping" },
                React.createElement("div", { className: "flex justify-center p-8" },
                    React.createElement(Spinner, { width: 25, height: 25 })))) : (React.createElement(Card, null,
                React.createElement(Card.Session, { title: "Shipping" },
                    React.createElement("div", null, "Choose where you ship and how much you charge for shipping.")),
                zonesQueryData.error ? (React.createElement(Card.Session, null,
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-critical" }, zonesQueryData.error.message)))) : (React.createElement(Zones, { zones: zonesQueryData.data.shippingZones, countries: countriesQueryData.data.countries, getZones: () => {
                        reexecuteQuery({
                            requestPolicy: 'network-only'
                        }, false);
                    } })),
                React.createElement(Card.Session, null,
                    React.createElement("div", null,
                        React.createElement(Button, { title: "Create new shipping zone", variant: "primary", onAction: () => modal.openModal() }))))))),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(ZoneForm, { method: "POST", saveZoneApi: createShippingZoneApi, countries: countriesQueryData.data.countries, closeModal: () => modal.closeModal(), getZones: reexecuteQuery, zone: {} })))))));
}
ShippingSetting.propTypes = {
    createShippingZoneApi: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    createShippingZoneApi: url(routeId: "createShippingZone")
  }
`;
//# sourceMappingURL=ShippingSetting.js.map