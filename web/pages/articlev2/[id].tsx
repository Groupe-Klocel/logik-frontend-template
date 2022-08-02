import { AppHead } from '@components';

import { ArticleDetailsExtra } from 'modules/Articles/Elements/ArticleDetailsExtra';
import { ArticleDetailsHeader } from 'modules/Articles/Elements/ArticleDetailsHeader';
import { ArticleModel } from 'models/ArticleModel';
import { ItemDetailComponent } from 'modules/Crud/ItemDetailComponent';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlePage: PageComponent = () => {
    const tableName = ArticleModel.tableName;

    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <ItemDetailComponent
                extraDataComponent={<ArticleDetailsExtra articleId={id!} />}
                headerComponent={
                    <ArticleDetailsHeader id={id!} tableName={tableName} dataModel={ArticleModel} />
                }
                id={id!}
                dataModel={ArticleModel}
            />
        </>
    );
};

ArticlePage.layout = MainLayout;

export default ArticlePage;
