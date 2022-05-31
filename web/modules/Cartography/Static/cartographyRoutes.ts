// Breadcrumb Name should be the same as in the translation file

export const cartographyRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        breadcrumbName: 'menu:cartography'
    }
];

export const blocksRoutes = [
    ...cartographyRoutes,
    {
        path: '/blocks',
        breadcrumbName: 'menu:blocks'
    }
];

export const addBlockRoutes = [
    ...blocksRoutes,
    {
        path: '/add-block',
        breadcrumbName: 'actions:add-block'
    }
];

export const locationsRoutes = [
    ...cartographyRoutes,
    {
        path: '/locations',
        breadcrumbName: 'menu:locations'
    }
];

export const addLocationRoutes = [
    ...locationsRoutes,
    {
        path: '/add-location',
        breadcrumbName: 'actions:add-location'
    }
];
