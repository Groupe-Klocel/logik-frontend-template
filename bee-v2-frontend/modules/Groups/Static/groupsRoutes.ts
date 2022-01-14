import { BreadcrumbType } from "helpers/types/types";
import {accessManagementRoutes} from '../../Users/Static/usersRoutes'

// Breadcrumb Name should be the same as in the translation file 
export const groupsRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
  {
    path: '/groups',
    breadcrumbName:'groups',
  }
];

export const addGroupRoutes: Array<BreadcrumbType> = [...groupsRoutes, 
  {
    path: '/add-group',
    breadcrumbName:'add-group',
  }
  ]

  export const groupOfUsersRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
    {
      breadcrumbName: 'rights',
    },
    {
      path: '/group-of-users',
      breadcrumbName:'group-of-users',
    }
  ];
  

  export const groupsRightsRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
    {
      breadcrumbName: 'rights',
    },
    {
      path: '/groups-rigths',
      breadcrumbName:'groups-rigths',
    }
  ];
  
