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

export const feedbackOverwritesRoutes: Array<BreadcrumbType> = [
    ...feedbacksRoutes,
    {
        path: '/feedback-overwrites',
        breadcrumbName: 'menu:feedbackOverwrite'
    }
];

export const addFeedbackOverwriteRoutes: Array<BreadcrumbType> = [
    ...feedbackOverwritesRoutes,
    {
        path: '/add-feedbackOverwrite',
        breadcrumbName: 'actions:add-feedbackOverwrite'
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
