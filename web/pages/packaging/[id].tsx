import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SinglePackaging } from 'modules/Packagings/PagesContainer/SinglePackaging';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const PackagingPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SinglePackaging router={router} id={id!} />
        </>
    );
};

PackagingPage.layout = MainLayout;

export default PackagingPage;
