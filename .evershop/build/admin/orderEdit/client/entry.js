
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import ee2e900f9e2bd62b49879d88ef868ad37 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import ecdc63f6591632ffda2c86bb10dcd4abe from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import ef91d5548715c99eb2acf1114864ee148 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import eaa487040c51b665fede53e926142296f from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import ed2e1c870711a003eb893c2af2272f35b from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import ecbbec76f61aa6a535509f6938f61209d from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import eeaa51bc175e6c08ba647b4887eeaae82 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import e6278f1f87b2cb4e7f3700756da756788 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import efc75b5311a22fb308fba2f2c86047441 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e9b37b5e3a3079197a218e7fef78836cd from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import ef41861c822d4b19851142a1a956d2950 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e28928d3d8c14b8f8be3953fdfe9cb69a from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e77f0778625a8705e544cbb330fdd7b9a from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ea3c364728964b2b8550d27056f8fe056 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e2583ca7be27e3ae66cebde2b6303daf8 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/orderEdit/CaptureButton.js';
import e07188177c889ea874e936a5337d6fff1 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ea4351c794fa5e05a696243955730ebf9 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import ebf4b7d08172187f6eba17e5e13be371a from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Activities.js';
import edffe1f8b2242f2f31e0f9b38d9c4e3ad from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/AddTrackingButton.js';
import eee9fb71b283160753f50f85f32e62cc2 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CancelButton.js';
import eaebf4ff12121d72250c6104e55c7f995 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Customer.js';
import e775afbe2807dabde9a54be4648722751 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CustomerNotes.js';
import e70ddae2936f550157f9bdb9dada93010 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Items.js';
import ed549b77ee3d46cf2fd55479f8e490aba from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Layout.js';
import e7296d0182fd687177f7fc29722ea9d96 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/MarkDeliveredButton.js';
import eb84afbd0675f4c693858ea958ec26713 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/PageHeading.js';
import ea628a0e0b6a24d4917672df737e60870 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Payment.js';
import ea07d0166ef31506392f4a922b88be6ac from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/ShipButton.js';
import e980d56b9acd3e58c4e1757daf1d52e63 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Status.js';
import e262d365ca0c3aa25f4179563bcf17d87 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/TrackingButton.js';
import ee2fed85356487701bc7bbb6f258c424e from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/orderEdit/PaypalCaptureButton.js';
import ee1aabbe9526cc6ba5e24b8ae4db0d81b from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeRefundButton.js';
import eb9a6915056091f07d2e7fe2f7b099d4e from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import eb9f08132e54e6553507f0910ea7f307c from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e598a79bcc32f65dad6bb3254b10099a7 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e5a66e83d1e6478deb3ea91bc56671d92 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e6aae2c2af7253a5806295e45b3c2b8b3 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e9066ed1ddfde619724d7c74a2903989a from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeCaptureButton.js';
import e695e3e5d651bf3e578d08bd2b53853bd from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    ee2e900f9e2bd62b49879d88ef868ad37: {
      id: 'ee2e900f9e2bd62b49879d88ef868ad37',
      sortOrder: 50,
      component: { default: ee2e900f9e2bd62b49879d88ef868ad37 }
    },
    e6278f1f87b2cb4e7f3700756da756788: {
      id: 'e6278f1f87b2cb4e7f3700756da756788',
      sortOrder: 10,
      component: { default: e6278f1f87b2cb4e7f3700756da756788 }
    },
    e77f0778625a8705e544cbb330fdd7b9a: {
      id: 'e77f0778625a8705e544cbb330fdd7b9a',
      sortOrder: 20,
      component: { default: e77f0778625a8705e544cbb330fdd7b9a }
    }
  },
  adminMenu: {
    ecdc63f6591632ffda2c86bb10dcd4abe: {
      id: 'ecdc63f6591632ffda2c86bb10dcd4abe',
      sortOrder: 20,
      component: { default: ecdc63f6591632ffda2c86bb10dcd4abe }
    },
    ed2e1c870711a003eb893c2af2272f35b: {
      id: 'ed2e1c870711a003eb893c2af2272f35b',
      sortOrder: 60,
      component: { default: ed2e1c870711a003eb893c2af2272f35b }
    },
    e28928d3d8c14b8f8be3953fdfe9cb69a: {
      id: 'e28928d3d8c14b8f8be3953fdfe9cb69a',
      sortOrder: 10,
      component: { default: e28928d3d8c14b8f8be3953fdfe9cb69a }
    },
    e07188177c889ea874e936a5337d6fff1: {
      id: 'e07188177c889ea874e936a5337d6fff1',
      sortOrder: 40,
      component: { default: e07188177c889ea874e936a5337d6fff1 }
    },
    ea4351c794fa5e05a696243955730ebf9: {
      id: 'ea4351c794fa5e05a696243955730ebf9',
      sortOrder: 30,
      component: { default: ea4351c794fa5e05a696243955730ebf9 }
    },
    eb9a6915056091f07d2e7fe2f7b099d4e: {
      id: 'eb9a6915056091f07d2e7fe2f7b099d4e',
      sortOrder: 50,
      component: { default: eb9a6915056091f07d2e7fe2f7b099d4e }
    },
    e5a66e83d1e6478deb3ea91bc56671d92: {
      id: 'e5a66e83d1e6478deb3ea91bc56671d92',
      sortOrder: 500,
      component: { default: e5a66e83d1e6478deb3ea91bc56671d92 }
    }
  },
  quickLinks: {
    ef91d5548715c99eb2acf1114864ee148: {
      id: 'ef91d5548715c99eb2acf1114864ee148',
      sortOrder: 20,
      component: { default: ef91d5548715c99eb2acf1114864ee148 }
    },
    eb9f08132e54e6553507f0910ea7f307c: {
      id: 'eb9f08132e54e6553507f0910ea7f307c',
      sortOrder: 30,
      component: { default: eb9f08132e54e6553507f0910ea7f307c }
    }
  },
  settingPageMenu: {
    eaa487040c51b665fede53e926142296f: {
      id: 'eaa487040c51b665fede53e926142296f',
      sortOrder: 15,
      component: { default: eaa487040c51b665fede53e926142296f }
    },
    e598a79bcc32f65dad6bb3254b10099a7: {
      id: 'e598a79bcc32f65dad6bb3254b10099a7',
      sortOrder: 10,
      component: { default: e598a79bcc32f65dad6bb3254b10099a7 }
    },
    e6aae2c2af7253a5806295e45b3c2b8b3: {
      id: 'e6aae2c2af7253a5806295e45b3c2b8b3',
      sortOrder: 5,
      component: { default: e6aae2c2af7253a5806295e45b3c2b8b3 }
    },
    e695e3e5d651bf3e578d08bd2b53853bd: {
      id: 'e695e3e5d651bf3e578d08bd2b53853bd',
      sortOrder: 20,
      component: { default: e695e3e5d651bf3e578d08bd2b53853bd }
    }
  },
  footerLeft: {
    ecbbec76f61aa6a535509f6938f61209d: {
      id: 'ecbbec76f61aa6a535509f6938f61209d',
      sortOrder: 10,
      component: { default: ecbbec76f61aa6a535509f6938f61209d }
    },
    ea3c364728964b2b8550d27056f8fe056: {
      id: 'ea3c364728964b2b8550d27056f8fe056',
      sortOrder: 20,
      component: { default: ea3c364728964b2b8550d27056f8fe056 }
    }
  },
  body: {
    eeaa51bc175e6c08ba647b4887eeaae82: {
      id: 'eeaa51bc175e6c08ba647b4887eeaae82',
      sortOrder: 10,
      component: { default: eeaa51bc175e6c08ba647b4887eeaae82 }
    },
    ef41861c822d4b19851142a1a956d2950: {
      id: 'ef41861c822d4b19851142a1a956d2950',
      sortOrder: 10,
      component: { default: ef41861c822d4b19851142a1a956d2950 }
    }
  },
  head: {
    efc75b5311a22fb308fba2f2c86047441: {
      id: 'efc75b5311a22fb308fba2f2c86047441',
      sortOrder: 5,
      component: { default: efc75b5311a22fb308fba2f2c86047441 }
    }
  },
  adminNavigation: {
    e9b37b5e3a3079197a218e7fef78836cd: {
      id: 'e9b37b5e3a3079197a218e7fef78836cd',
      sortOrder: 10,
      component: { default: e9b37b5e3a3079197a218e7fef78836cd }
    }
  },
  orderPaymentActions: {
    e2583ca7be27e3ae66cebde2b6303daf8: {
      id: 'e2583ca7be27e3ae66cebde2b6303daf8',
      sortOrder: 10,
      component: { default: e2583ca7be27e3ae66cebde2b6303daf8 }
    },
    ee2fed85356487701bc7bbb6f258c424e: {
      id: 'ee2fed85356487701bc7bbb6f258c424e',
      sortOrder: 10,
      component: { default: ee2fed85356487701bc7bbb6f258c424e }
    },
    ee1aabbe9526cc6ba5e24b8ae4db0d81b: {
      id: 'ee1aabbe9526cc6ba5e24b8ae4db0d81b',
      sortOrder: 10,
      component: { default: ee1aabbe9526cc6ba5e24b8ae4db0d81b }
    },
    e9066ed1ddfde619724d7c74a2903989a: {
      id: 'e9066ed1ddfde619724d7c74a2903989a',
      sortOrder: 10,
      component: { default: e9066ed1ddfde619724d7c74a2903989a }
    }
  },
  leftSide: {
    ebf4b7d08172187f6eba17e5e13be371a: {
      id: 'ebf4b7d08172187f6eba17e5e13be371a',
      sortOrder: 30,
      component: { default: ebf4b7d08172187f6eba17e5e13be371a }
    },
    e70ddae2936f550157f9bdb9dada93010: {
      id: 'e70ddae2936f550157f9bdb9dada93010',
      sortOrder: 10,
      component: { default: e70ddae2936f550157f9bdb9dada93010 }
    },
    ea628a0e0b6a24d4917672df737e60870: {
      id: 'ea628a0e0b6a24d4917672df737e60870',
      sortOrder: 20,
      component: { default: ea628a0e0b6a24d4917672df737e60870 }
    }
  },
  order_actions: {
    edffe1f8b2242f2f31e0f9b38d9c4e3ad: {
      id: 'edffe1f8b2242f2f31e0f9b38d9c4e3ad',
      sortOrder: 5,
      component: { default: edffe1f8b2242f2f31e0f9b38d9c4e3ad }
    },
    e7296d0182fd687177f7fc29722ea9d96: {
      id: 'e7296d0182fd687177f7fc29722ea9d96',
      sortOrder: 10,
      component: { default: e7296d0182fd687177f7fc29722ea9d96 }
    },
    ea07d0166ef31506392f4a922b88be6ac: {
      id: 'ea07d0166ef31506392f4a922b88be6ac',
      sortOrder: 10,
      component: { default: ea07d0166ef31506392f4a922b88be6ac }
    },
    e262d365ca0c3aa25f4179563bcf17d87: {
      id: 'e262d365ca0c3aa25f4179563bcf17d87',
      sortOrder: 15,
      component: { default: e262d365ca0c3aa25f4179563bcf17d87 }
    }
  },
  pageHeadingRight: {
    eee9fb71b283160753f50f85f32e62cc2: {
      id: 'eee9fb71b283160753f50f85f32e62cc2',
      sortOrder: 35,
      component: { default: eee9fb71b283160753f50f85f32e62cc2 }
    }
  },
  rightSide: {
    eaebf4ff12121d72250c6104e55c7f995: {
      id: 'eaebf4ff12121d72250c6104e55c7f995',
      sortOrder: 15,
      component: { default: eaebf4ff12121d72250c6104e55c7f995 }
    },
    e775afbe2807dabde9a54be4648722751: {
      id: 'e775afbe2807dabde9a54be4648722751',
      sortOrder: 10,
      component: { default: e775afbe2807dabde9a54be4648722751 }
    }
  },
  content: {
    ed549b77ee3d46cf2fd55479f8e490aba: {
      id: 'ed549b77ee3d46cf2fd55479f8e490aba',
      sortOrder: 10,
      component: { default: ed549b77ee3d46cf2fd55479f8e490aba }
    },
    eb84afbd0675f4c693858ea958ec26713: {
      id: 'eb84afbd0675f4c693858ea958ec26713',
      sortOrder: 5,
      component: { default: eb84afbd0675f4c693858ea958ec26713 }
    }
  },
  pageHeadingLeft: {
    e980d56b9acd3e58c4e1757daf1d52e63: {
      id: 'e980d56b9acd3e58c4e1757daf1d52e63',
      sortOrder: 200,
      component: { default: e980d56b9acd3e58c4e1757daf1d52e63 }
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
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );