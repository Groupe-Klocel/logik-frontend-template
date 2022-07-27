// Breadcrumb Name should be the same as in the translation file

export const goodsInsRoutes = [
    {
        breadcrumbName: 'menu:stock-management'
    },
];

export const goodsInsSubRoutes = [
    ...goodsInsRoutes,
    {
        path: '/goods-ins',
        breadcrumbName: 'menu:goods-ins'
    }
];

export const addgoodsInRoutes = [
    ...goodsInsRoutes,
    {
        path: '/add-goodsIn',
        breadcrumbName: 'actions:add-goods-in'
    }
];

export const setsRoutes = [
    ...goodsInsRoutes,
    {
        path: '/sets',
        breadcrumbName: 'menu:sets'
    }
];

export const addgoodsInSetRoutes = [
    ...setsRoutes,
    {
        path: '/add-goodsIn-set',
        breadcrumbName: 'menu:add-goodsIn-set'
    }
];
