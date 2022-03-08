import { HeaderContent } from '@components';
import { packagingsRoutes } from 'modules/Packagings/Static/packagingsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { PackagingsList } from 'modules/Packagings/Elements/PackagingsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export const Packagings = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:packagings')}
                routes={packagingsRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add-packaging')}
                        path="/add-packaging"
                        type="primary"
                    />
                }
            />
            <PackagingsList />
        </>
    );
};
