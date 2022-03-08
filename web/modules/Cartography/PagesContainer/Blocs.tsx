import { HeaderContent } from '@components';
import { cartographyRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import useTranslation from 'next-translate/useTranslation';
import { BlocsList } from 'modules/Cartography/Elements/BlocsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';


export const Blocs = ()  => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:blocs')}
                routes={cartographyRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:bloc') })}
                        path="/add-bloc"
                        type="primary"
                    />
                }
            />
            <BlocsList />
        </>
    );
};
