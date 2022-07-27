// Breadcrumb Name should be the same as in the translation file

export const equipmentRoutes = [
    {
        breadcrumbName: 'menu:equipment'
    }
];

export const addEquipmentRoutes = [
    ...equipmentRoutes,
    {
        path: '/add-equipment',
        breadcrumbName: 'actions:add-equipment'
    }
];

export const addEquipmentDetailRoutes = [
    ...equipmentRoutes,
    {
        path: '/add-equipment-detail',
        breadcrumbName: 'actions:add-equipment-detail'
    }
];
