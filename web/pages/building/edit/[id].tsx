import { AppHead } from '@components';
import { EditBuilding } from 'modules/Buildings/PageContainer/EditBuilding';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditBuildingPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditBuilding router={router} id={id!} />
        </>
    );
};

EditBuildingPage.layout = MainLayout;

export default EditBuildingPage;
