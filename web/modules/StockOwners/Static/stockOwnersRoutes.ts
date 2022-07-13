// Breadcrumb Name should be the same as in the translation file

export const stockOwnersRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        path: '/stock-owners',
        breadcrumbName: 'menu:stock-owners'
    }
];

export const addstockOwnerRoutes = [
    ...stockOwnersRoutes,
    {
        path: '/add-stock-owner',
        breadcrumbName: 'menu:add-stock-owner'
    }
];
