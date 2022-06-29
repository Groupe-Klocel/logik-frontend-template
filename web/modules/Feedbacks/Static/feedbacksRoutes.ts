import { BreadcrumbType } from '@helpers';

// Breadcrumb Name should be the same as in the translation file

export const feedbacksRoutes = [
    {
        breadcrumbName: 'menu:administration'
    },
    {
        breadcrumbName: 'menu:feedbacks'
    }
];

export const movementsConfigRoutes: Array<BreadcrumbType> = [
    ...feedbacksRoutes,
    {
        path: '/feedback-overwrite',
        breadcrumbName: 'menu:feedbackOverwrite'
    }
];

export const addMovementsConfigRoutes: Array<BreadcrumbType> = [
    ...movementsConfigRoutes,
    {
        path: '/add-feedbackOverwrite',
        breadcrumbName: 'actions:add-feedbackOverwrite'
    }
];

export const statusConfigRoutes: Array<BreadcrumbType> = [
    ...feedbacksRoutes,
    {
        path: '/status-config',
        breadcrumbName: 'menu:status-config'
    }
];

export const addStatusConfigRoutes: Array<BreadcrumbType> = [
    ...statusConfigRoutes,
    {
        path: '/add-status-config-feedback',
        breadcrumbName: 'menu:add-status-config-feedback'
    }
];
