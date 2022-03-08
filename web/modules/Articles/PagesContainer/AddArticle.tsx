import { HeaderContent } from '@components';
import { AddArticleForm } from 'modules/Articles/Forms/AddArticleForm';
import { addArticleRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';

export const AddArticle = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Article' })} routes={addArticleRoutes} />
            <AddArticleForm />
        </>
    );
};
