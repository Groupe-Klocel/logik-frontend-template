import { HeaderContent } from '@components';
import { featuresTypesRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { FeaturesTypesList } from 'modules/Articles/Elements/FeaturesTypesList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';


export const FeaturesTypes = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:features-types')}
                routes={featuresTypesRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:feature-type') })}
                        path="/add-feature-type"
                        type="primary"
                    />
                }
            />
            <FeaturesTypesList />
        </>
    );
};
