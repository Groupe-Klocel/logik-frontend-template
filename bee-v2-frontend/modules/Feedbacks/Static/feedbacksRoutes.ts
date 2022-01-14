import { BreadcrumbType } from "helpers/types/types";

// Breadcrumb Name should be the same as in the translation file 

export const feedbacksRoutes = [
  {
    breadcrumbName: 'administration',
  },
  {
    breadcrumbName: 'feedbacks',
  },
]

export const movementsConfigRoutes: Array<BreadcrumbType> = [...feedbacksRoutes,  
  {
    path: '/movements-config',
    breadcrumbName: 'movements-config',
  }
];

export const addMovementsConfigRoutes: Array<BreadcrumbType> = [...movementsConfigRoutes,  
  {
    path: '/add-movements-config-feedback',
    breadcrumbName: 'add-movements-config-feedback',
  }
];

export const statusConfigRoutes: Array<BreadcrumbType> = [...feedbacksRoutes,  
  {
    path: '/status-config',
    breadcrumbName: 'status-config',
  }
];

export const addStatusConfigRoutes: Array<BreadcrumbType> = [...statusConfigRoutes,  
  {
    path: '/add-status-config-feedback',
    breadcrumbName: 'add-status-config-feedback',
  }
];

