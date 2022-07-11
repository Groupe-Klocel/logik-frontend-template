import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { ReturnCodes } from '../modules/ReturnCodes/PagesContainer/ReturnCodes';

type PageComponent = FC & { layout: typeof MainLayout };

const ReturnCodesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <ReturnCodes />
        </>
    );
};

ReturnCodesPage.layout = MainLayout;

export default ReturnCodesPage;
