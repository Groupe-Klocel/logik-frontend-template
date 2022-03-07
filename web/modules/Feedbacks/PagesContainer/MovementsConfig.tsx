import { HeaderContent } from '@components';
import { movementsConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { MovementsConfigList } from 'modules/Feedbacks/Elements/MovementsConfigList';


export const MovementsConfig = ()  => {
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
            <MovementsConfigList />
        </>
    );
};
