import { HeaderContent } from '@components';
import { cartographyRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import useTranslation from 'next-translate/useTranslation';
import { LocationsList } from 'modules/Cartography/Elements/LocationsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export const Locations = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:locations')}
                routes={cartographyRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:location') })}
                        path="/add-location"
                        type="primary"
                    />
                }
            />
            <LocationsList />
        </>
    );
};
