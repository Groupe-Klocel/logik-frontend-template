// Breadcrumb Name should be the same as in the translation file

export const patternsRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
];

export const patternsSubRoutes = [
    ...patternsRoutes,
    {
        path: '/patterns',
        breadcrumbName: 'menu:patterns'
    }
];

export const addPatternRoutes = [
    ...patternsSubRoutes,
    {
        path: '/add-pattern',
        breadcrumbName: 'actions:add-pattern'
    }
];

export const setsRoutes = [
    ...patternsRoutes,
    {
        path: '/sets',
        breadcrumbName: 'menu:sets'
    }
];

export const addPatternSetRoutes = [
    ...setsRoutes,
    {
        path: '/add-pattern-set',
        breadcrumbName: 'menu:add-article-set'
    }
];
