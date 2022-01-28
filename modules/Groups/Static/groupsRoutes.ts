import { BreadcrumbType } from "@helpers";
import { accessManagementRoutes } from '../../Users/Static/usersRoutes';

// Breadcrumb Name should be the same as in the translation file 
export const groupsRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
  {
    path: '/groups',
    breadcrumbName:'menu:groups',
  }
];

export const addGroupRoutes: Array<BreadcrumbType> = [...groupsRoutes, 
  {
    path: '/add-group',
    breadcrumbName:'menu:add-group',
  }
  ]

  export const groupOfUsersRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
    {
      breadcrumbName: 'menu:rights',
    },
    {
      path: '/group-of-users',
      breadcrumbName:'menu:group-of-users',
    }
  ];
  

  export const groupsRightsRoutes: Array<BreadcrumbType> = [...accessManagementRoutes,
    {
      breadcrumbName: 'menu:rights',
    },
    {
      path: '/groups-rigths',
      breadcrumbName:'menu:groups-rigths',
    }
  ];
  
