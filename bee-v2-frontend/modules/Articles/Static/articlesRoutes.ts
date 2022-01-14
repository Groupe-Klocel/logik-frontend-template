import { BreadcrumbType } from "helpers/types/types";

// Breadcrumb Name should be the same as in the translation file 

export const articlesRoutes = [
  {
    breadcrumbName: 'configuration',
  },
  {
    breadcrumbName: 'articles',
  }
]

export const featuresRoutes = [...articlesRoutes,
  {
    breadcrumbName: 'features',
  }
]

export const featuresCodesRoutes = [...featuresRoutes,
  {
    path:'/features-codes',
    breadcrumbName: 'features-codes',
  }
]

export const addFeatureCodeRoutes = [...featuresCodesRoutes,
  {
    path:'/add-feature-code',
    breadcrumbName: 'add-feature-code',
  }
]

export const featuresTypesRoutes = [...featuresRoutes,
  {
    path:'/features-codes',
    breadcrumbName: 'features-codes',
  }
]

export const addFeatureTypeRoutes = [...featuresTypesRoutes,
  {
    path:'/add-feature-type',
    breadcrumbName: 'add-feature-type',
  }
]

export const articlesSubRoutes = [...articlesRoutes,
  {
    path:'/articles',
    breadcrumbName: 'articles',
  }
]

export const addArticleRoutes = [...articlesSubRoutes,
  {
    path:'/add-article',
    breadcrumbName: 'add-article',
  }
]

export const barcodesRoutes = [...articlesRoutes,
  {
    path:'/barcodes',
    breadcrumbName: 'barcodes',
  }
]

export const addBarcodeRoutes = [...barcodesRoutes,
  {
    path:'/add-barcode',
    breadcrumbName: 'add-barcode',
  }
]

export const blacklistedBarcodesRoutes = [...articlesRoutes,
  {
    path:'/blacklisted-barcodes',
    breadcrumbName: 'blacklisted-barcodes',
  }
]

export const setsRoutes = [...articlesRoutes,
  {
    path:'/sets',
    breadcrumbName: 'sets',
  }
]

export const addArticleSetRoutes = [...setsRoutes,
  {
    path:'/add-article-set',
    breadcrumbName: 'add-article-set',
  }
]
