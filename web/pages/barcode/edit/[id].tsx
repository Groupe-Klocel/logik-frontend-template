import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditArticle } from 'modules/Articles/PagesContainer/EditArticle';
import { EditBarcode } from 'modules/Barcodes/PagesContainer/EditBarcode';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditBarcodePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditBarcode router={router} id={id!} />
        </>
    );
};

EditBarcodePage.layout = MainLayout;

export default EditBarcodePage;
