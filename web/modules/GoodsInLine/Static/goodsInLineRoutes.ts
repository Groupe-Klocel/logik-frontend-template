// Breadcrumb Name should be the same as in the translation file

import { goodsInsSubRoutes } from "modules/GoodsIns/Static/goodsInsRoutes";

export const goodsInLineRoutes = [
    ...goodsInsSubRoutes,
];

export const goodsInLineSubRoutes = [
    ...goodsInLineRoutes,
    {
        // path: '/goods-ins',
        breadcrumbName: 'menu:goods-in-line'
    }
];

export const addgoodsInRoutes = [
    ...goodsInLineRoutes,
    {
        path: '/add-goodsIn',
        breadcrumbName: 'actions:add-goods-in'
    }
];

export const setsRoutes = [
    ...goodsInLineRoutes,
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
