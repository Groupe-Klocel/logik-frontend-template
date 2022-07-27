import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { StatusConfig } from '../modules/Feedbacks/PagesContainer/StatusConfig';

type PageComponent = FC & { layout: typeof MainLayout };

const StatusConfigPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <StatusConfig />
        </>
    );
};

StatusConfigPage.layout = MainLayout;

export default StatusConfigPage;
