import { HeaderContent } from '@components';
import { statusFeedbackOverwritesRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { StatusFeedbackOverwritesList } from 'modules/Feedbacks/Elements/StatusFeedbackOverwritesList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export const StatusFeedbackOverwrites = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:status-feedback-overwrites')}
                routes={statusFeedbackOverwritesRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add-status-feedback-overwrites')}
                        path="/add-status-feedback-overwrites"
                        type="primary"
                    />
                }
            />
            <StatusFeedbackOverwritesList />
        </>
    );
};
