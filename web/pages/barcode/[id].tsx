import { AppHead } from '@components';
import { SingleBarcode } from 'modules/Barcodes/PagesContainer/SingleBarcode';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const BarcodePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AppHead title="Bee V2" />
            <SingleBarcode router={router} id={id!} />
        </>
    );
};

BarcodePage.layout = MainLayout;

export default BarcodePage;
