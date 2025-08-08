export type AttributeData = {
    attribute_code: string;
    attribute_name: string;
    type: string;
    is_required: boolean;
    display_on_frontend?: boolean;
    groups: number[];
    [key: string]: any;
};
/**
 * Create attribute service. This service will create a attribute with all related data
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (data: AttributeData, context: Record<string, any>) => Promise<any>;
export default _default;
