import { HeaderContent } from '@components';
import { addArticleSetRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddArticleSetForm } from 'modules/Articles/Forms/AddSetForm';
import { useRouter } from 'next/router';

export const AddArticleSet = () => {
    const { t } = useTranslation('actions');

    const router = useRouter();

    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:article-set') })}
                routes={addArticleSetRoutes}
                onBack={() => router.push(`/sets`)}
            />
            <AddArticleSetForm />
        </>
    );
};
