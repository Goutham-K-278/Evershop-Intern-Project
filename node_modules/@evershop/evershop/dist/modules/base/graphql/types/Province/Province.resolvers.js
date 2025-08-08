import { provinces } from '../../../../../lib/locale/provinces.js';
export default {
    Query: {
        provinces: (_, { countries = [] }) => {
            if (countries.length === 0) {
                return provinces;
            }
            else {
                return provinces.filter((p) => countries.includes(p.countryCode));
            }
        }
    },
    Province: {
        name: (province) => {
            if (province.name) {
                return province.name;
            }
            else {
                const p = provinces.find((pr) => pr.code === province);
                return (p === null || p === void 0 ? void 0 : p.name) || 'INVALID_PROVINCE';
            }
        },
        countryCode: (province) => {
            if (province.countryCode) {
                return province.countryCode;
            }
            else {
                const p = provinces.find((pr) => pr.code === province);
                return (p === null || p === void 0 ? void 0 : p.countryCode) || 'INVALID_PROVINCE';
            }
        },
        code: (province) => {
            if (province === null || province === void 0 ? void 0 : province.code) {
                return province === null || province === void 0 ? void 0 : province.code;
            }
            else {
                return province || 'INVALID_PROVINCE';
            }
        }
    }
};
//# sourceMappingURL=Province.resolvers.js.map