import { AppHead, HeaderContent } from '@components';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';
import { ArticleModel } from 'models/ArticleModel';
import { EditItemComponent } from 'modules/Crud/EditItemComponent';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';

type PageComponent = FC & { layout: typeof MainLayout };

const EditArticlePage: PageComponent = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { id } = router.query;

    const breadsCrumb = [
        ...articlesSubRoutes,
        {
            breadcrumbName: `${id!}`
        }
    ];

    return (
        <>
            <AppHead title="Bee V2" />
            <EditItemComponent
                id={id!}
                dataModel={ArticleModel}
                headerComponent={
                    <HeaderContent
                        title={`${t('common:article')} ${id!}`}
                        routes={breadsCrumb}
                        onBack={() => router.back()}
                    />
                }
                routeAfterSuccess={`/article/:id`}
            />
        </>
    );
};

EditArticlePage.layout = MainLayout;

export default EditArticlePage;
