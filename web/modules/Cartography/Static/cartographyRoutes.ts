
// Breadcrumb Name should be the same as in the translation file 

export const cartographyRoutes = [
  {
    breadcrumbName: 'menu:configuration',
  },
  {
    breadcrumbName: 'menu:cartography',
  }
]

export const blocsRoutes = [...cartographyRoutes,
  {
    path:'/blocs',
    breadcrumbName: 'menu:blocs',
  },
]

export const addBlocRoutes = [...blocsRoutes,
  {
    path:'/add-bloc',
    breadcrumbName: 'menu:add-bloc',
  },
]

export const locationsRoutes = [...cartographyRoutes,
  {
    path:'/locations',
    breadcrumbName: 'menu:locations',
  },
]

export const addLocationRoutes = [...locationsRoutes,
  {
    path:'/add-location',
    breadcrumbName: 'menu:add-location',
  },
]

