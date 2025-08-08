export type AttributeData = {
    attribute_code?: string;
    type?: string;
    groups: number[];
    options: {
        option_text: string;
        option_id: string | number;
    }[];
    [key: string]: any;
};
/**
 * Update attribute service. This service will update a attribute with all related data
 * @param {String} uuid
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (uuid: string, data: AttributeData, context: Record<string, any>) => Promise<any>;
export default _default;
