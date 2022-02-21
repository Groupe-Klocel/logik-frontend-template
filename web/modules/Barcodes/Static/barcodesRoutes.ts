
// Breadcrumb Name should be the same as in the translation file 
import {articlesRoutes} from "modules/Articles/Static/articlesRoutes"

export const barcodesRoutes = [...articlesRoutes,
  {
    path:'/barcodes',
    breadcrumbName: 'menu:barcodes',
  }
]

export const addBarcodeRoutes = [...barcodesRoutes,
  {
    path:'/add-barcode',
    breadcrumbName: 'menu:add-barcode',
  }
]

export const blacklistedBarcodesRoutes = [...articlesRoutes,
  {
    path:'/blacklisted-barcodes',
    breadcrumbName: 'menu:blacklisted-barcodes',
  }
]