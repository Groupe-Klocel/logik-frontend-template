import { AppHead } from '@components';

import { ArticleDetailsExtra } from 'modules/Crud/ArticleDetailsExtra';
import { ArticleDetailsHeader } from 'modules/Crud/ArticleDetailsHeader';
import { articleModel } from 'modules/Crud/Models';
import { SingleItemDetail } from 'modules/Crud/Components/SingleItemDetail';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlePage: PageComponent = () => {
    const tableName = articleModel.tableName;

    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleItemDetail
                extraDataComponent={<ArticleDetailsExtra articleId={id!} />}
                headerComponent={
                    <ArticleDetailsHeader id={id!} router={router} tableName={tableName} />
                }
                router={router}
                id={id!}
                dataModel={articleModel}
            />
        </>
    );
};

ArticlePage.layout = MainLayout;

export default ArticlePage;
