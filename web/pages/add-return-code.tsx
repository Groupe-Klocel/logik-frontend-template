import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddReturnCode } from '../modules/ReturnCodes/PagesContainer/AddReturnCode';

type PageComponent = FC & { layout: typeof MainLayout };

const AddReturnCodePage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddReturnCode />
        </>
    );
};

AddReturnCodePage.layout = MainLayout;

export default AddReturnCodePage;
