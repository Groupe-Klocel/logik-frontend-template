
// Breadcrumb Name should be the same as in the translation file 

export const stocksRoutes = [
  {
    breadcrumbName: 'menu:configuration',
  },
  {
    path: '/stock-statuses',
    breadcrumbName: 'menu:stock-statuses',
  }
]

export const addStockStatusRoutes = [...stocksRoutes,
  {
    path: '/add-stock-status',
    breadcrumbName: 'menu:add-stock-status',
  }
]
