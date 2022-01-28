// Breadcrumb Name should be the same as in the translation file 

export const packagingsRoutes = [
  {
    breadcrumbName: 'menu:configuration',
  },
  {
    path: '/packagings',
    breadcrumbName: 'menu:packagings',
  }
]

export const addPackagingRoutes = [...packagingsRoutes,
{
  path: '/add-article',
  breadcrumbName: 'menu:add-article',
}
]
