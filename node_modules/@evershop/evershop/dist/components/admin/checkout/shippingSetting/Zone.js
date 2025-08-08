import { Methods } from '@components/admin/checkout/shippingSetting/Methods';
import ZoneForm from '@components/admin/checkout/shippingSetting/ZoneForm';
import { Card } from '@components/admin/cms/Card';
import { useModal } from '@components/common/modal/useModal';
import MapIcon from '@heroicons/react/solid/esm/LocationMarkerIcon';
import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
function Zone({ zone, countries, getZones }) {
    var _a;
    const modal = useModal();
    return (React.createElement(Card.Session, { title: React.createElement("div", { className: "flex justify-between items-center gap-8" },
            React.createElement("div", null, zone.name),
            React.createElement("div", { className: "flex justify-between gap-8" },
                React.createElement("a", { href: "#", className: "text-interactive", onClick: (e) => {
                        e.preventDefault();
                        modal.openModal();
                    } }, "Edit Zone"),
                React.createElement("a", { className: "text-critical", href: "#", onClick: async (e) => {
                        e.preventDefault();
                        try {
                            const response = await axios.delete(zone.deleteApi);
                            if (response.status === 200) {
                                // Toast success
                                toast.success('Zone removed successfully');
                                // Delay for 2 seconds
                                setTimeout(() => {
                                    // Reload page
                                    window.location.reload();
                                }, 1500);
                            }
                            else {
                                // Toast error
                                toast.error('Failed to remove zone');
                            }
                        }
                        catch (error) {
                            // Toast error
                            toast.error('Failed to remove zone');
                        }
                    } }, "Remove Zone"))) },
        React.createElement("div", { className: "divide-y border rounded border-divider" },
            React.createElement("div", { className: "flex justify-start items-center border-divider mt-8" },
                React.createElement("div", { className: "p-8" },
                    React.createElement(MapIcon, { width: 25, height: 25, fill: "#008060" })),
                React.createElement("div", { className: "flex-grow px-4" },
                    React.createElement("div", null,
                        React.createElement("b", null, ((_a = zone.country) === null || _a === void 0 ? void 0 : _a.name) || 'Worldwide')),
                    React.createElement("div", null,
                        zone.provinces
                            .slice(0, 3)
                            .map((province) => province.name)
                            .join(', '),
                        zone.provinces.length > 3 && '...'))),
            React.createElement("div", { className: "flex justify-start items-center border-divider mt-8" },
                React.createElement("div", { className: "flex-grow px-4" },
                    React.createElement(Methods, { methods: zone.methods, getZones: getZones, addMethodApi: zone.addMethodApi })))),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(ZoneForm, { method: "PATCH", saveZoneApi: zone.updateApi, countries: countries, closeModal: () => modal.closeModal(), getZones: getZones, zone: zone })))))));
}
Zone.propTypes = {
    zone: PropTypes.shape({
        name: PropTypes.string,
        country: PropTypes.shape({
            name: PropTypes.string
        }),
        provinces: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string
        })),
        methods: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string
        })),
        addMethodApi: PropTypes.string,
        deleteApi: PropTypes.string,
        updateApi: PropTypes.string
    }).isRequired,
    countries: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        code: PropTypes.string,
        provinces: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            code: PropTypes.string
        }))
    })).isRequired,
    getZones: PropTypes.func.isRequired
};
export default Zone;
//# sourceMappingURL=Zone.js.map