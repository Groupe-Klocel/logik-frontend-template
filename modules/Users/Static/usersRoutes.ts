import { BreadcrumbType } from "@helpers";

// Breadcrumb Name should be the same as in the translation file 

export const accessManagementRoutes = [
  {
    breadcrumbName: 'menu:administration',
  },
  {
    breadcrumbName: 'menu:access-management',
  },
]

export const usersRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,  
  {
    path: '/users',
    breadcrumbName: 'menu:users',
  }
];

export const addUserRoutes: Array<BreadcrumbType> = [...usersRoutes,
{
  path: '/add-user',
  breadcrumbName: 'menu:add-user',
}
]

export const usersRightsRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
{
  breadcrumbName: 'menu:rights',
},
{
  path: '/users-rights',
  breadcrumbName: 'menu:users-rights',
}
]

