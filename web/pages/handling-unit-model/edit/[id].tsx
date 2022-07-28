import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditHandlingUnitModel } from 'modules/HandlingUnits/PagesContainer/EditHandlingUnitModel';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditHandlingUnitModelPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditHandlingUnitModel router={router} id={id!} />
        </>
    );
};

EditHandlingUnitModelPage.layout = MainLayout;

export default EditHandlingUnitModelPage;
