import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { useRouter } from 'next/router';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const EditCarrierPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditCarrier router={router} id={id!} />
        </>
    );
};

EditCarrierPage.layout = MainLayout;

export default EditCarrierPage;
