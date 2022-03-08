import { HeaderContent } from '@components';
import { addFeatureCodeRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddFeatureCodeForm } from 'modules/Articles/Elements/AddFeatureCodeForm';


export const AddFeatureCode = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add2', { name: 'Feature Code' })}
                routes={addFeatureCodeRoutes}
            />
            <AddFeatureCodeForm />
        </>
    );
};
