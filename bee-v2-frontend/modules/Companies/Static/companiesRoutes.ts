import { BreadcrumbType } from "helpers/types/types";

// Breadcrumb Name should be the same as in the translation file 

export const companiesRoutes = [
  {
    breadcrumbName: 'configuration',
  },
  {
    path: '/companies',
    breadcrumbName: 'companies',
  }
]

export const addCompanyRoutes = [...companiesRoutes,
  {
    path: '/add-company',
    breadcrumbName: 'company',
  }
]

