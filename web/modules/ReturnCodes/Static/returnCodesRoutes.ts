// Breadcrumb Name should be the same as in the translation file

export const returnCodesRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    { path: '/return-codes', breadcrumbName: 'menu:return-codes' }
];

export const addReturnCodeRoutes = [
    ...returnCodesRoutes,
    {
        path: '/add-return-code',
        breadcrumbName: 'actions:add-return-code'
    }
];
