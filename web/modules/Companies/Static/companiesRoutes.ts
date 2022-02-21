// Breadcrumb Name should be the same as in the translation file

export const companiesRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        path: '/companies',
        breadcrumbName: 'menu:companies'
    }
];

export const addCompanyRoutes = [
    ...companiesRoutes,
    {
        path: '/add-company',
        breadcrumbName: 'menu:company'
    }
];
