import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <SingleBarcode router={router} id={id!} />
        </>
    );
};

BarcodePage.layout = MainLayout;

export default BarcodePage;
