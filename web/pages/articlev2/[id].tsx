import { AppHead } from '@components';
import { SingleItem } from 'modules/Crud/SingleItem';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleItem
                router={router}
                id={id!}
                tableName={'Article'}
                queryName={'article'}
                useColumns={['id', 'name']}
            />
        </>
    );
};

ArticlePage.layout = MainLayout;

export default ArticlePage;
