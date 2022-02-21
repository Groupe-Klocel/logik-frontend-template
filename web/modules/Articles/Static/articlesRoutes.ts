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
        breadcrumbName: 'menu:add-feature-code'
    }
];

export const featuresTypesRoutes = [
    ...featuresRoutes,
    {
        path: '/features-codes',
        breadcrumbName: 'menu:features-codes'
    }
];

export const addFeatureTypeRoutes = [
    ...featuresTypesRoutes,
    {
        path: '/add-feature-type',
        breadcrumbName: 'menu:add-feature-type'
    }
];

export const articlesSubRoutes = [
    ...articlesRoutes,
    {
        path: '/articles',
        breadcrumbName: 'menu:articles'
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
