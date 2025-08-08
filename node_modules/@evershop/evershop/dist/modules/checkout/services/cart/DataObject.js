var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DataObject_fields, _DataObject_data, _DataObject_errors, _DataObject_triggeredField, _DataObject_requestedValue;
import isEqualWith from 'lodash.isequalwith';
import { error } from '../../../../lib/log/logger.js';
export class DataObject {
    constructor(fields, initialData = {}) {
        _DataObject_fields.set(this, void 0);
        _DataObject_data.set(this, {});
        _DataObject_errors.set(this, {});
        _DataObject_triggeredField.set(this, void 0);
        _DataObject_requestedValue.set(this, void 0);
        __classPrivateFieldSet(this, _DataObject_fields, fields, "f");
        __classPrivateFieldSet(this, _DataObject_data, initialData, "f");
        this.isBuilding = false;
    }
    // Build the field value. This function will be called when the field value is changed
    // If error is thrown, all changes will be rollback
    async build() {
        const _this = this;
        // Keep current values for rollback
        const values = { ...__classPrivateFieldGet(this, _DataObject_data, "f") };
        try {
            this.isBuilding = true;
            __classPrivateFieldSet(this, _DataObject_errors, {}, "f");
            for (let i = 0; i < __classPrivateFieldGet(this, _DataObject_fields, "f").length; i += 1) {
                const field = __classPrivateFieldGet(this, _DataObject_fields, "f")[i];
                let value = field.key === __classPrivateFieldGet(this, _DataObject_triggeredField, "f")
                    ? __classPrivateFieldGet(this, _DataObject_requestedValue, "f")
                    : __classPrivateFieldGet(this, _DataObject_data, "f")[field.key];
                // Execute the list of resolvers
                for (let j = 0; j < field.resolvers.length; j += 1) {
                    const resolver = field.resolvers[j];
                    value = await resolver.call(_this, value);
                }
                __classPrivateFieldGet(this, _DataObject_data, "f")[field.key] = value;
            }
            this.isBuilding = false;
        }
        catch (e) {
            error(e);
            this.isBuilding = false;
            // Rollback the changes
            __classPrivateFieldSet(this, _DataObject_data, { ...values }, "f");
            throw e;
        }
    }
    getTriggeredField() {
        return __classPrivateFieldGet(this, _DataObject_triggeredField, "f");
    }
    getRequestedValue() {
        return __classPrivateFieldGet(this, _DataObject_requestedValue, "f");
    }
    getData(key) {
        const field = __classPrivateFieldGet(this, _DataObject_fields, "f").find((f) => f.key === key);
        if (field === undefined) {
            throw new Error(`Field ${key} not existed`);
        }
        return __classPrivateFieldGet(this, _DataObject_data, "f")[field.key];
    }
    setError(key, message) {
        if (!message) {
            delete __classPrivateFieldGet(this, _DataObject_errors, "f")[key];
        }
        else {
            __classPrivateFieldGet(this, _DataObject_errors, "f")[key] = message;
        }
    }
    async setData(key, value, force = false) {
        __classPrivateFieldSet(this, _DataObject_triggeredField, key, "f");
        __classPrivateFieldSet(this, _DataObject_requestedValue, value, "f");
        if (this.isBuilding === true) {
            throw new Error('Can not set value when object is building');
        }
        const field = __classPrivateFieldGet(this, _DataObject_fields, "f").find((f) => f.key === key);
        if (field === undefined) {
            throw new Error(`Field ${key} not existed`);
        }
        if (isEqualWith(__classPrivateFieldGet(this, _DataObject_data, "f")[key], value) && !force) {
            return value;
        }
        // Run the full build
        await this.build();
        const result = __classPrivateFieldGet(this, _DataObject_data, "f")[key];
        if (!isEqualWith(result, value)) {
            throw new Error(`Field resolvers returned different value - ${key}, ${value}, ${result}`);
        }
        else {
            return value;
        }
    }
    hasError() {
        return Object.keys(__classPrivateFieldGet(this, _DataObject_errors, "f")).length > 0;
    }
    getErrors() {
        return __classPrivateFieldGet(this, _DataObject_errors, "f");
    }
    export() {
        const data = {};
        __classPrivateFieldGet(this, _DataObject_fields, "f").forEach((f) => {
            data[f.key] = structuredClone(__classPrivateFieldGet(this, _DataObject_data, "f")[f.key]);
        });
        if (this.hasError()) {
            data.errors = Object.values(__classPrivateFieldGet(this, _DataObject_errors, "f"));
        }
        else {
            data.errors = {};
        }
        return data;
    }
}
_DataObject_fields = new WeakMap(), _DataObject_data = new WeakMap(), _DataObject_errors = new WeakMap(), _DataObject_triggeredField = new WeakMap(), _DataObject_requestedValue = new WeakMap();
//# sourceMappingURL=DataObject.js.map