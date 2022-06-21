import { HeaderContent } from '@components';
import { movementsConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { FeedbackOverwriteList } from 'modules/Feedbacks/Elements/FeedbackOverwriteList';

export const FeedbackOverwrite = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:movements-config')}
                routes={movementsConfigRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add-movements-config-feedback')}
                        path="/add-movements-config-feedback"
                        type="primary"
                    />
                }
            />
            <FeedbackOverwriteList />
        </>
    );
};
