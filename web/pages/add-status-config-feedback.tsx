import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddStatusConfig } from '../modules/Feedbacks/PagesContainer/AddStatusConfig';

type PageComponent = FC & { layout: typeof MainLayout };

const AddStatusConfigPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddStatusConfig />
        </>
    );
};

AddStatusConfigPage.layout = MainLayout;

export default AddStatusConfigPage;
