// Breadcrumb Name should be the same as in the translation file

export const carriersRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        path: '/carriers',
        breadcrumbName: 'menu:carriers'
    }
];

export const addCarrierRoutes = [
    ...carriersRoutes,
    {
        path: '/add-carrier',
        breadcrumbName: 'menu:add-carrier'
    }
];
