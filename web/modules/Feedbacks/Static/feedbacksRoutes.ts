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
        path: '/movements-config',
        breadcrumbName: 'menu:movements-config'
    }
];

export const addMovementsConfigRoutes: Array<BreadcrumbType> = [
    ...movementsConfigRoutes,
    {
        path: '/add-movements-config-feedback',
        breadcrumbName: 'menu:add-movements-config-feedback'
    }
];

export const statusFeedbackOverwritesRoutes: Array<BreadcrumbType> = [
    ...feedbacksRoutes,
    {
        path: '/status-feedback-overwrites',
        breadcrumbName: 'menu:status-feedback-overwrites'
    }
];

export const addStatusFeedbackOverwritesRoutes: Array<BreadcrumbType> = [
    ...statusFeedbackOverwritesRoutes,
    {
        path: '/add-status-feedback-overwrites',
        breadcrumbName: 'menu:add-status-feedback-overwrites'
    }
];
