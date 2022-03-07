import { HeaderContent } from '@components';
import { statusConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { StatusConfigList } from 'modules/Feedbacks/Elements/StatusConfigList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';


export const StatusConfig = ()  => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:status-config')}
                routes={statusConfigRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add-status-config-feedback')}
                        path="/add-status-config-feedback"
                        type="primary"
                    />
                }
            />
            <StatusConfigList />
        </>
    );
};
