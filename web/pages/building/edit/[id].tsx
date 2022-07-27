import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <EditBuilding router={router} id={id!} />
        </>
    );
};

EditBuildingPage.layout = MainLayout;

export default EditBuildingPage;
