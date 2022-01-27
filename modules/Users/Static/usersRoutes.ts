import { BreadcrumbType } from "@helpers";

// Breadcrumb Name should be the same as in the translation file 

export const accessManagementRoutes = [
  {
    breadcrumbName: 'administration',
  },
  {
    breadcrumbName: 'access-management',
  },
]

export const usersRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,  
  {
    path: '/users',
    breadcrumbName: 'users',
  }
];

export const addUserRoutes: Array<BreadcrumbType> = [...usersRoutes,
{
  path: '/add-user',
  breadcrumbName: 'add-user',
}
]

export const usersRightsRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
{
  breadcrumbName: 'rights',
},
{
  path: '/users-rights',
  breadcrumbName: 'users-rights',
}
]

