import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
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
import ec586f87af9c5945b9db6b9566920c576 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit/PageEditForm.js';
import e1fa7895c208055f1871973d9e4d0c19f from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/FormContent.js';
import ef13e67d91978ff814f3f6a1e6a1c70ba from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/General.js';
import e99f2d01ff152bd7266f4756b40ddde44 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/PageHeading.js';
import e78c9004f2ae2b2ad9140b02ff5a134a7 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/Seo.js';
import ee116d70bac7e65f343474a3aa5836280 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/Status.js';
import e07188177c889ea874e936a5337d6fff1 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ea4351c794fa5e05a696243955730ebf9 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import eb9a6915056091f07d2e7fe2f7b099d4e from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import eb9f08132e54e6553507f0910ea7f307c from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e598a79bcc32f65dad6bb3254b10099a7 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e5a66e83d1e6478deb3ea91bc56671d92 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e6aae2c2af7253a5806295e45b3c2b8b3 from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e695e3e5d651bf3e578d08bd2b53853bd from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///C:/Users/gouth/Documents/evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
export default renderHtml;
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
  content: {
    ec586f87af9c5945b9db6b9566920c576: {
      id: 'ec586f87af9c5945b9db6b9566920c576',
      sortOrder: 10,
      component: { default: ec586f87af9c5945b9db6b9566920c576 }
    },
    e99f2d01ff152bd7266f4756b40ddde44: {
      id: 'e99f2d01ff152bd7266f4756b40ddde44',
      sortOrder: 5,
      component: { default: e99f2d01ff152bd7266f4756b40ddde44 }
    }
  },
  cmsPageForm: {
    e1fa7895c208055f1871973d9e4d0c19f: {
      id: 'e1fa7895c208055f1871973d9e4d0c19f',
      sortOrder: 10,
      component: { default: e1fa7895c208055f1871973d9e4d0c19f }
    }
  },
  wideScreen: {
    ef13e67d91978ff814f3f6a1e6a1c70ba: {
      id: 'ef13e67d91978ff814f3f6a1e6a1c70ba',
      sortOrder: 10,
      component: { default: ef13e67d91978ff814f3f6a1e6a1c70ba }
    },
    e78c9004f2ae2b2ad9140b02ff5a134a7: {
      id: 'e78c9004f2ae2b2ad9140b02ff5a134a7',
      sortOrder: 30,
      component: { default: e78c9004f2ae2b2ad9140b02ff5a134a7 }
    }
  },
  pageEditGeneral: {
    ee116d70bac7e65f343474a3aa5836280: {
      id: 'ee116d70bac7e65f343474a3aa5836280',
      sortOrder: 15,
      component: { default: ee116d70bac7e65f343474a3aa5836280 }
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