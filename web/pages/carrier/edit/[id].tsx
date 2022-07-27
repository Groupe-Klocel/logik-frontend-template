import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { EditCarrier } from 'modules/Carriers/PagesContainer/EditCarrier';
import { useRouter } from 'next/router';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const EditCarrierPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditCarrier router={router} id={id!} />
        </>
    );
};

EditCarrierPage.layout = MainLayout;

export default EditCarrierPage;
