export type PaymentMethodInfo = {
    methodCode: string;
    methodName: string;
    meta?: Record<string, any>;
};
export type PaymentMethodFactory = {
    init: () => PaymentMethodInfo | Promise<PaymentMethodInfo>;
    validator?: () => boolean | Promise<boolean>;
};
/**
 * This function retrieves the available payment methods from the registry.
 * @returns A promise that resolves to an array of payment methods.
 */
export declare function getAvailablePaymentMethods(): Promise<PaymentMethodInfo[]>;
/**
 * Registers a new payment method.
 * @param factory - The factory object that contains the init and optional validator methods.
 * @throws Will throw an error if the factory does not have an init method.
 */
export declare function registerPaymentMethod(factory: PaymentMethodFactory): void;
