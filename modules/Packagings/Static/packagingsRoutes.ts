
// Breadcrumb Name should be the same as in the translation file 

export const packagingsRoutes = [
  {
    breadcrumbName: 'configuration',
  },
  {
    path: '/packagings',
    breadcrumbName: 'packagings',
  }
]

export const addPackagingRoutes = [...packagingsRoutes,
{
  path: '/add-article',
  breadcrumbName: 'add-article',
}
]
