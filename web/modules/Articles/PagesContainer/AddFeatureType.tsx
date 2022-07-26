import { HeaderContent } from '@components';
import { addFeatureTypeRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddFeatureTypeForm } from 'modules/Articles/Forms/AddFeatureTypeForm';
import { useRouter } from 'next/router';

export const AddFeatureType = () => {
    const { t } = useTranslation('actions');

    const router = useRouter();

    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:feature-type') })}
                routes={addFeatureTypeRoutes}
                onBack={() => router.back()}
            />
            <AddFeatureTypeForm />
        </>
    );
};
