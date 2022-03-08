import { HeaderContent } from '@components';
import { addFeatureTypeRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddFeatureTypeForm } from 'modules/Articles/Elements/AddFeatureTypeForm';

export const AddFeatureType = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add2', { name: 'Feature Type' })}
                routes={addFeatureTypeRoutes}
            />
            <AddFeatureTypeForm />
        </>
    );
};
