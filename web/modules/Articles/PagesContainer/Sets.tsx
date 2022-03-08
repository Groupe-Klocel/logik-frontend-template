import { HeaderContent } from '@components';
import { setsRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { SetsList } from 'modules/Articles/Elements/SetsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export const Sets = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:sets')}
                routes={setsRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:article-set') })}
                        path="/add-article-set"
                        type="primary"
                    />
                }
            />
            <SetsList />
        </>
    );
};
