import { HeaderContent } from '@components';
import { settingsRoutes } from 'modules/Settings/Static/settingsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { SettingsList } from 'modules/Settings/Elements/SettingsList';

export const Settings = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <HeaderContent title={t('settings')} routes={settingsRoutes} />
            <SettingsList />
        </>
    );
};
