import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { SingleCarrier } from 'modules/Carriers/PagesContainer/SingleCarrier';
import { useRouter } from 'next/router';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const CarrierPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleCarrier router={router} id={id!} />
        </>
    );
};

CarrierPage.layout = MainLayout;

export default CarrierPage;
