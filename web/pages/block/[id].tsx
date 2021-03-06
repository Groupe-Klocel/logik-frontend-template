import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleBlock } from 'modules/Cartography/PagesContainer/SingleBlock';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const BlockPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleBlock router={router} id={id!} />
        </>
    );
};

BlockPage.layout = MainLayout;

export default BlockPage;
