import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Settings } from '../modules/Settings/PagesContainer/Settings';

type PageComponent = FC & { layout: typeof MainLayout };

const SettingsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Settings />
        </>
    );
};

SettingsPage.layout = MainLayout;

export default SettingsPage;
