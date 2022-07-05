export const buildingsRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        breadcrumbName: 'menu:buildings'
    }
];

export const addBuildingRoutes = [
    ...buildingsRoutes,
    {
        path: '/building',
        breadcrumbName: 'actions:add-building'
    }
];
