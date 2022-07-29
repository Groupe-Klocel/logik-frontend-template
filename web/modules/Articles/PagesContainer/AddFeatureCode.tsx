import { HeaderContent } from '@components';
import { addFeatureCodeRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddFeatureCodeForm } from 'modules/Articles/Forms/AddFeatureCodeForm';
import { useRouter } from 'next/router';

export const AddFeatureCode = () => {
    const { t } = useTranslation('actions');

    const router = useRouter();

    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:feature-code') })}
                routes={addFeatureCodeRoutes}
                onBack={() => router.push(`/features-codes`)}
            />
            <AddFeatureCodeForm />
        </>
    );
};
