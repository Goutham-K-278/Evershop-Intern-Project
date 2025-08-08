export function SubmitButton({ productId, createProductApi, addVariantItemApi, productFormContextDispatch, modal: { closeModal }, refresh }: {
    productId: any;
    createProductApi: any;
    addVariantItemApi: any;
    productFormContextDispatch: any;
    modal: {
        closeModal: any;
    };
    refresh: any;
}): React.JSX.Element;
export namespace SubmitButton {
    namespace propTypes {
        let addVariantItemApi: any;
        let createProductApi: any;
        let productFormContextDispatch: any;
        let productId: any;
        let refresh: any;
        let modal: any;
    }
}
import React from 'react';
