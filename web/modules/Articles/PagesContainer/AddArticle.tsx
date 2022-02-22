import { HeaderContent } from '@components';
import { AddArticleForm } from 'modules/Articles/Forms/AddArticleForm';
import { addArticleRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IAddArticleProps {}

export const AddArticle: FC<IAddArticleProps> = ({}: IAddArticleProps) => {
    let { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Article' })} routes={addArticleRoutes} />
            <AddArticleForm />
        </>
    );
};
