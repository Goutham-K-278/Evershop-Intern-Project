export class DataObject {
    constructor(fields: any, initialData?: {});
    isBuilding: boolean;
    build(): Promise<void>;
    getTriggeredField(): any;
    getRequestedValue(): any;
    getData(key: any): any;
    setError(key: any, message: any): void;
    setData(key: any, value: any, force?: boolean): Promise<any>;
    hasError(): boolean;
    getErrors(): {};
    export(): {
        errors: {};
    };
    #private;
}
