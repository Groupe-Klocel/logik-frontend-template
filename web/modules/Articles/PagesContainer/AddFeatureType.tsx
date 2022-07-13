import { HeaderContent } from '@components';
import { addFeatureTypeRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddFeatureTypeForm } from 'modules/Articles/Forms/AddFeatureTypeForm';

export const AddFeatureType = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:feature-type') })}
                routes={addFeatureTypeRoutes}
            />
            <AddFeatureTypeForm />
        </>
    );
};
