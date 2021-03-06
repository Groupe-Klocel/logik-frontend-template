// Breadcrumb Name should be the same as in the translation file

export const patternPathsRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
];

export const patternPathsSubRoutes = [
    ...patternPathsRoutes,
    {
        path: '/pattern-paths',
        breadcrumbName: 'menu:patternPaths'
    }
];

export const addPatternPathRoutes = [
    ...patternPathsSubRoutes,
    {
        path: '/add-pattern-path',
        breadcrumbName: 'actions:add-patternPath'
    }
];

export const managePatternPathLocation = [
    ...patternPathsSubRoutes,
    {
        path: '/manage-pattern-path-location',
        breadcrumbName: 'actions:manage-pattern-path-location'
    }
]
