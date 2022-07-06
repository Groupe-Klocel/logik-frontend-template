export const buildingsRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        path: '/buildings',
        breadcrumbName: 'menu:buildings'
    }
];

export const addBuildingRoutes = [
    ...buildingsRoutes,
    {
        breadcrumbName: 'actions:add-building'
    }
];
