import { useAppState } from '@components/common/context/app';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';
import { get } from '../../../../lib/util/get.js';
export default function DateRow({ id, areaProps }) {
    const context = useAppState();
    const date = DateTime.fromSQL(areaProps.row[id], { zone: 'UTC' });
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("span", null, date.isValid
                ? date
                    .setLocale(get(context, 'shop.language', 'en'))
                    .setZone(get(context, 'shop.timezone', 'UTC'))
                    .toFormat('LLL dd yyyy')
                : '--'))));
}
DateRow.propTypes = {
    areaProps: PropTypes.shape({
        row: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    id: PropTypes.string.isRequired
};
//# sourceMappingURL=DateRow.js.map