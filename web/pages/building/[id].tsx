import { AppHead } from '@components';
import { SingleBuilding } from 'modules/Buildings/PageContainer/SingleBuilding';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const BuildingPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleBuilding router={router} id={id!} />
        </>
    );
};

BuildingPage.layout = MainLayout;

export default BuildingPage;
