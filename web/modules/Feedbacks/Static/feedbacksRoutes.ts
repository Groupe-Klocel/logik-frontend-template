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

export const statusFeedbackOverwritesRoutes = [
    ...feedbacksRoutes,
    {
        path: '/status-feedback-overwrites',
        breadcrumbName: 'menu:status-feedback-overwrites'
    }
];

export const addStatusFeedbackOverwritesRoutes = [
    ...statusFeedbackOverwritesRoutes,
    {
        path: '/add-status-feedback-overwrite',
        breadcrumbName: 'actions:add-status-feedback-overwrite'
    }
];
