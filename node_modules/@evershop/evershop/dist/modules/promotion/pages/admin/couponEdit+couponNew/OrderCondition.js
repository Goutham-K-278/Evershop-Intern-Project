import { RequiredProducts } from '@components/admin/promotion/couponEdit/RequireProducts';
import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
export default function OrderCondition({ coupon = {} }) {
    const condition = (coupon === null || coupon === void 0 ? void 0 : coupon.condition) || {};
    return (React.createElement("div", null,
        React.createElement(Field, { type: "text", name: "condition[order_total]", label: "Minimum purchase amount", placeholder: "Enter minimum purchase amount", value: condition.orderTotal || '' }),
        React.createElement(Field, { type: "text", name: "condition[order_qty]", label: "Minimum purchase qty", placeholder: "Enter minimum purchase qty", value: condition.orderQty || '' }),
        React.createElement(RequiredProducts, { requiredProducts: condition.requiredProducts || [] })));
}
OrderCondition.propTypes = {
    coupon: PropTypes.shape({
        condition: PropTypes.shape({
            orderTotal: PropTypes.string,
            orderQty: PropTypes.string,
            requiredProducts: PropTypes.arrayOf(PropTypes.shape({
                key: PropTypes.string,
                operator: PropTypes.string,
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
                ]),
                qty: PropTypes.string
            }))
        })
    })
};
OrderCondition.defaultProps = {
    coupon: {}
};
export const layout = {
    areaId: 'couponEditLeft',
    sortOrder: 10
};
export const query = `
  query Query {
    coupon(id: getContextValue('couponId', null)) {
      condition {
        orderTotal
        orderQty
        requiredProducts {
          key
          operator
          value
          qty
        }
      }
    }
  }
`;
//# sourceMappingURL=OrderCondition.js.map