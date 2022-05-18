import { AppHead } from '@components';
import { SingleBlock } from 'modules/Cartography/PagesContainer/SingleBlock';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const BlocPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleBlock router={router} id={id!} />
        </>
    );
};

BlocPage.layout = MainLayout;

export default BlocPage;
