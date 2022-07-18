// Breadcrumb Name should be the same as in the translation file

export const articlesRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        breadcrumbName: 'menu:articles'
    }
];

export const featuresRoutes = [
    ...articlesRoutes,
    {
        breadcrumbName: 'menu:features'
    }
];

export const featuresCodesRoutes = [
    ...featuresRoutes,
    {
        path: '/features-codes',
        breadcrumbName: 'menu:features-codes'
    }
];

export const addFeatureCodeRoutes = [
    ...featuresCodesRoutes,
    {
        path: '/add-feature-code',
        breadcrumbName: 'actions:add-feature-code'
    }
];

export const featuresTypesRoutes = [
    ...featuresRoutes,
    {
        path: '/features-types',
        breadcrumbName: 'menu:features-types'
    }
];

export const addFeatureTypeRoutes = [
    ...featuresTypesRoutes,
    {
        path: '/add-feature-type',
        breadcrumbName: 'actions:add-feature-type'
    }
];

export const addFeatureTypeDetailRoutes = [
    ...featuresTypesRoutes,
    {
        path: '/add-feature-type-detail',
        breadcrumbName: 'actions:add-feature-type-detail'
    }
];

export const articlesSubRoutes = [
    ...articlesRoutes,
    {
        path: '/articles',
        breadcrumbName: 'menu:articles'
    }
];

export const barcodesSubRoutes = [
    ...articlesRoutes,
    {
        path: '/barcodes',
        breadcrumbName: 'menu:barcodes'
    }
];

export const addArticleRoutes = [
    ...articlesSubRoutes,
    {
        path: '/add-article',
        breadcrumbName: 'actions:add-article'
    }
];

export const setsRoutes = [
    ...articlesRoutes,
    {
        path: '/sets',
        breadcrumbName: 'menu:sets'
    }
];

export const addArticleSetRoutes = [
    ...setsRoutes,
    {
        path: '/add-article-set',
        breadcrumbName: 'menu:add-article-set'
    }
];
