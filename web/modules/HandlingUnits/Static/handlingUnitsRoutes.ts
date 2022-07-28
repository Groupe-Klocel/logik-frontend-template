// Breadcrumb Name should be the same as in the translation file

export const handlingUnitsRoutes = [
    {
        breadcrumbName: 'menu:configuration'
    },
    {
        breadcrumbName: 'menu:handling-units'
    }
];

export const handlingUnitsSubRoutes = [
    ...handlingUnitsRoutes,
    {
        path: '/handling-unit-models',
        breadcrumbName: 'menu:handling-unit-models'
    }
];

export const addHandlingUnitSubRoutes = [
    ...handlingUnitsRoutes,
    {
        path: '/add-handling-unit-model',
        breadcrumbName: 'actions:add-handling-unit-model'
    }
];
