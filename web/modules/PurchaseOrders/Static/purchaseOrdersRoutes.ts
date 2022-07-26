// Breadcrumb Name should be the same as in the translation file

export const purchaseOrdersRoutes = [
    {
        breadcrumbName: 'menu:stock-management'
    },
];

export const purchaseOrdersSubRoutes = [
    ...purchaseOrdersRoutes,
    {
        path: '/purchase-orders',
        breadcrumbName: 'menu:purchase-orders'
    }
];

export const addpurchaseOrderRoutes = [
    ...purchaseOrdersSubRoutes,
    {
        path: '/add-purchaseOrder',
        breadcrumbName: 'actions:add-purchase-order'
    }
];

export const setsRoutes = [
    ...purchaseOrdersRoutes,
    {
        path: '/sets',
        breadcrumbName: 'menu:sets'
    }
];

export const addpurchaseOrderSetRoutes = [
    ...setsRoutes,
    {
        path: '/add-purchaseOrder-set',
        breadcrumbName: 'menu:add-purchaseOrder-set'
    }
];
