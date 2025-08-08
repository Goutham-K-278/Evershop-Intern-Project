declare namespace _default {
    namespace Setting {
        function paypalPaymentStatus(setting: any): any;
        function paypalPaymentIntent(setting: any): any;
        function paypalClientId(setting: any): any;
        function paypalClientSecret(setting: any, _: any, { user }: {
            user: any;
        }): any;
        function paypalWebhookSecret(setting: any, _: any, { user }: {
            user: any;
        }): any;
    }
}
export default _default;
