import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { settingsRoutes } from 'modules/Settings/Static/settingsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { SettingsList } from 'modules/Settings/Elements/SettingsList';
import styled from 'styled-components';

export interface ISettingsProps {}

export const Settings: FC<ISettingsProps> = ({}: ISettingsProps) => {
    let { t } = useTranslation('common');
    return (
        <>
            <HeaderContent title={t('settings')} routes={settingsRoutes} />
            <SettingsList />
        </>
    );
};
