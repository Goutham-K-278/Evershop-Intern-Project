export function getFilterableAttributes(categoryId: any): Promise<{
    attributeName: any;
    attributeId: any;
    attributeCode: any;
    options: {
        optionId: any;
        optionText: any;
    }[];
}[]>;
