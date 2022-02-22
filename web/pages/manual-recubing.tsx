import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const ManualRecubingPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Manual Recubing Page" />
        </>
    );
};

ManualRecubingPage.layout = MainLayout;

export default ManualRecubingPage;
