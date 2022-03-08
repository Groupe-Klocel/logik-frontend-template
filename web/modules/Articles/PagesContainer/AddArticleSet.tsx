import { HeaderContent } from '@components';
import { addArticleSetRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddArticleSetForm } from 'modules/Articles/Elements/AddArticleSetForm';

export const AddArticleSet = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add2', { name: 'Article Set' })}
                routes={addArticleSetRoutes}
            />
            <AddArticleSetForm />
        </>
    );
};
