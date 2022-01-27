
// Breadcrumb Name should be the same as in the translation file 

export const cartographyRoutes = [
  {
    breadcrumbName: 'configuration',
  },
  {
    breadcrumbName: 'cartography',
  }
]

export const blocsRoutes = [...cartographyRoutes,
  {
    path:'/blocs',
    breadcrumbName: 'blocs',
  },
]

export const addBlocRoutes = [...blocsRoutes,
  {
    path:'/add-bloc',
    breadcrumbName: 'add-bloc',
  },
]

export const locationsRoutes = [...cartographyRoutes,
  {
    path:'/locations',
    breadcrumbName: 'locations',
  },
]

export const addLocationRoutes = [...locationsRoutes,
  {
    path:'/add-location',
    breadcrumbName: 'add-location',
  },
]

