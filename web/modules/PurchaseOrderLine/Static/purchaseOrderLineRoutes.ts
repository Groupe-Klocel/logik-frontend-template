// Breadcrumb Name should be the same as in the translation file

export const purchaseOrderLineRoutes = [
    {
        breadcrumbName: 'menu:stock-management'
    },
];

export const purchaseOrderLineSubRoutes = [
    ...purchaseOrderLineRoutes,
    {
        path: '/purchase-order-line',
        breadcrumbName: 'menu:purchase-order-line'
    }
];

export const addpurchaseOrderLineRoutes = [
    ...purchaseOrderLineRoutes,
    {
        path: '/add-purchaseOrder',
        breadcrumbName: 'actions:add-purchase-order-line'
    }
];

export const setsRoutes = [
    ...purchaseOrderLineRoutes,
    {
        path: '/sets',
        breadcrumbName: 'menu:sets'
    }
];

export const addpurchaseOrderLineSetRoutes = [
    ...setsRoutes,
    {
        path: '/add-purchaseOrder-set',
        breadcrumbName: 'menu:add-purchaseOrder-set'
    }
];
