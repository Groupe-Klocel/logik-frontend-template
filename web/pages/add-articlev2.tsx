import { HeaderContent } from '@components';
import { addArticleRoutes } from 'modules/Articles/Static/articlesRoutes';

import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { formStep1, formStep2, formStep3 } from 'modules/Articles/Forms/ArticleFormItems';
import { ArticleModel } from 'models/ArticleModel';
import { AddItemComponent } from 'modules/Crud/AddItemComponent';

type PageComponent = FC & { layout: typeof MainLayout };

const AddArticlePage: PageComponent = () => {
    const { t } = useTranslation('actions');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    return (
        <>
            <AppHead title="Bee V2" />
            <AddItemComponent
                headerComponent={
                    <HeaderContent
                        title={t('add2', { name: 'Article' })}
                        routes={addArticleRoutes}
                    />
                }
                addSteps={[
                    formStep1(errorMessageEmptyInput),
                    formStep2(errorMessageEmptyInput),
                    formStep3(errorMessageEmptyInput)
                ]}
                dataModel={ArticleModel}
                routeAfterSuccess={`/article/:id`}
            />
        </>
    );
};

AddArticlePage.layout = MainLayout;

export default AddArticlePage;
