
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
import e07188177c889ea874e936a5337d6fff1 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ea4351c794fa5e05a696243955730ebf9 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import eb9a6915056091f07d2e7fe2f7b099d4e from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import eb9f08132e54e6553507f0910ea7f307c from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e7f0b7674e910a53fd02291a6d10b42c9 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/CustomerCondition.js';
import ee369ae20c7572f5b0df7ea1b7b24da71 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/DiscountType.js';
import e9a90828c7b9c07e042d90f46acc0ab52 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/FormContent.js';
import e32c9327677016ff5df40a5539a905fa5 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/General.js';
import e6ccc52ca2770a9eb4bb71760e8d4cd8d from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/OrderCondition.js';
import e094cda7c4d7d24524f8828ac588e8881 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponEdit+couponNew/PageHeading.js';
import e2ed2bafdd96055f814b1a5bbdb067203 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/couponNew/CouponNewForm.js';
import e598a79bcc32f65dad6bb3254b10099a7 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e5a66e83d1e6478deb3ea91bc56671d92 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e6aae2c2af7253a5806295e45b3c2b8b3 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
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
  couponEditRight: {
    e7f0b7674e910a53fd02291a6d10b42c9: {
      id: 'e7f0b7674e910a53fd02291a6d10b42c9',
      sortOrder: 10,
      component: { default: e7f0b7674e910a53fd02291a6d10b42c9 }
    }
  },
  couponEditDiscountType: {
    ee369ae20c7572f5b0df7ea1b7b24da71: {
      id: 'ee369ae20c7572f5b0df7ea1b7b24da71',
      sortOrder: 30,
      component: { default: ee369ae20c7572f5b0df7ea1b7b24da71 }
    }
  },
  couponForm: {
    e9a90828c7b9c07e042d90f46acc0ab52: {
      id: 'e9a90828c7b9c07e042d90f46acc0ab52',
      sortOrder: 10,
      component: { default: e9a90828c7b9c07e042d90f46acc0ab52 }
    }
  },
  couponEditGeneral: {
    e32c9327677016ff5df40a5539a905fa5: {
      id: 'e32c9327677016ff5df40a5539a905fa5',
      sortOrder: 10,
      component: { default: e32c9327677016ff5df40a5539a905fa5 }
    }
  },
  couponEditLeft: {
    e6ccc52ca2770a9eb4bb71760e8d4cd8d: {
      id: 'e6ccc52ca2770a9eb4bb71760e8d4cd8d',
      sortOrder: 10,
      component: { default: e6ccc52ca2770a9eb4bb71760e8d4cd8d }
    }
  },
  content: {
    e094cda7c4d7d24524f8828ac588e8881: {
      id: 'e094cda7c4d7d24524f8828ac588e8881',
      sortOrder: 5,
      component: { default: e094cda7c4d7d24524f8828ac588e8881 }
    },
    e2ed2bafdd96055f814b1a5bbdb067203: {
      id: 'e2ed2bafdd96055f814b1a5bbdb067203',
      sortOrder: 10,
      component: { default: e2ed2bafdd96055f814b1a5bbdb067203 }
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