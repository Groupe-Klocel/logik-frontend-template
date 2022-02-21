import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { ReturnCodes } from '../modules/Unclassed/PagesContainer/ReturnCodes';

type PageComponent = FC & { layout: typeof MainLayout };

const ReturnCodesPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <ReturnCodes />
        </>
    );
};

ReturnCodesPage.layout = MainLayout;

export default ReturnCodesPage;
