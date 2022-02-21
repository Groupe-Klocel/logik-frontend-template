import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const CycleCountsPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Cycle Counts Page" />
        </>
    );
};

CycleCountsPage.layout = MainLayout;

export default CycleCountsPage;
