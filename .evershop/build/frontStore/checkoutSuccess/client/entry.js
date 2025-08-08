
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import ed0493060deda23c841f685470e5c70ba from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import ef493d4fb8d16ca66600a60d527f7636b from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import e44820d959951a07c935a81dc3a4e748d from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/CheckoutSuccess.js';
import e5401f31083c5193aa7bc581665da01ee from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/CustomerInfo.js';
import e0b498ca782142b03166cbb47fc084dad from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/ShippingNote.js';
import ed7850975b18a2434e810706de151ae81 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkoutSuccess/Summary.js';
import e11f68fa615069cdd718b62e9ed31ce5c from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import e23db27135df6566cc5c5e06b4f6a4bc8 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import e41b08ca7301caf35e9557738fc143f8b from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e05c625c6b1166646cfd83d60eb909e45 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e3c8c8815f52799821bf97ab8f84c5e7a from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import ebb36cbc237f24ea4806a695b968f0c91 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import e19710b613353a01d0e11818e98674949 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import collection_products from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
Area.defaultProps.components = {
  'icon-wrapper': {
    ed0493060deda23c841f685470e5c70ba: {
      id: 'ed0493060deda23c841f685470e5c70ba',
      sortOrder: 5,
      component: { default: ed0493060deda23c841f685470e5c70ba }
    },
    ef493d4fb8d16ca66600a60d527f7636b: {
      id: 'ef493d4fb8d16ca66600a60d527f7636b',
      sortOrder: 10,
      component: { default: ef493d4fb8d16ca66600a60d527f7636b }
    },
    e19710b613353a01d0e11818e98674949: {
      id: 'e19710b613353a01d0e11818e98674949',
      sortOrder: 30,
      component: { default: e19710b613353a01d0e11818e98674949 }
    }
  },
  content: {
    e44820d959951a07c935a81dc3a4e748d: {
      id: 'e44820d959951a07c935a81dc3a4e748d',
      sortOrder: 10,
      component: { default: e44820d959951a07c935a81dc3a4e748d }
    },
    e11f68fa615069cdd718b62e9ed31ce5c: {
      id: 'e11f68fa615069cdd718b62e9ed31ce5c',
      sortOrder: 0,
      component: { default: e11f68fa615069cdd718b62e9ed31ce5c }
    }
  },
  checkoutSuccessPageLeft: {
    e5401f31083c5193aa7bc581665da01ee: {
      id: 'e5401f31083c5193aa7bc581665da01ee',
      sortOrder: 10,
      component: { default: e5401f31083c5193aa7bc581665da01ee }
    }
  },
  checkoutSuccessSummary: {
    e0b498ca782142b03166cbb47fc084dad: {
      id: 'e0b498ca782142b03166cbb47fc084dad',
      sortOrder: 50,
      component: { default: e0b498ca782142b03166cbb47fc084dad }
    }
  },
  checkoutSuccessPageRight: {
    ed7850975b18a2434e810706de151ae81: {
      id: 'ed7850975b18a2434e810706de151ae81',
      sortOrder: 10,
      component: { default: ed7850975b18a2434e810706de151ae81 }
    }
  },
  footer: {
    e23db27135df6566cc5c5e06b4f6a4bc8: {
      id: 'e23db27135df6566cc5c5e06b4f6a4bc8',
      sortOrder: 10,
      component: { default: e23db27135df6566cc5c5e06b4f6a4bc8 }
    }
  },
  head: {
    e41b08ca7301caf35e9557738fc143f8b: {
      id: 'e41b08ca7301caf35e9557738fc143f8b',
      sortOrder: 5,
      component: { default: e41b08ca7301caf35e9557738fc143f8b }
    }
  },
  body: {
    e05c625c6b1166646cfd83d60eb909e45: {
      id: 'e05c625c6b1166646cfd83d60eb909e45',
      sortOrder: 1,
      component: { default: e05c625c6b1166646cfd83d60eb909e45 }
    },
    ebb36cbc237f24ea4806a695b968f0c91: {
      id: 'ebb36cbc237f24ea4806a695b968f0c91',
      sortOrder: 10,
      component: { default: ebb36cbc237f24ea4806a695b968f0c91 }
    }
  },
  header: {
    e3c8c8815f52799821bf97ab8f84c5e7a: {
      id: 'e3c8c8815f52799821bf97ab8f84c5e7a',
      sortOrder: 10,
      component: { default: e3c8c8815f52799821bf97ab8f84c5e7a }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );