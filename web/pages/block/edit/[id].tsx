import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { EditBlock } from 'modules/Cartography/PagesContainer/EditBlock';
import { SingleBlock } from 'modules/Cartography/PagesContainer/SingleBlock';
import { useRouter } from 'next/router';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const BlockPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditBlock router={router} id={id!} />
        </>
    );
};

BlockPage.layout = MainLayout;

export default BlockPage;
