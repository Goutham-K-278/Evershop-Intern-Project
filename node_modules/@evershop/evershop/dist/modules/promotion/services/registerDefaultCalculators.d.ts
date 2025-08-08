export function registerDefaultCalculators(): (((cart: any, coupon: any) => Promise<boolean>) | ((cart: any, coupon: any) => Promise<true | undefined>))[];
