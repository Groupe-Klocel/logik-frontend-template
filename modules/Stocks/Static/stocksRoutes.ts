
// Breadcrumb Name should be the same as in the translation file 

export const stocksRoutes = [
  {
    breadcrumbName: 'configuration',
  },
  {
    path: '/stock-statuses',
    breadcrumbName: 'stock-statuses',
  }
]

export const addStockStatusRoutes = [...stocksRoutes,
  {
    path: '/add-stock-status',
    breadcrumbName: 'add-stock-status',
  }
]
