import { HeaderContent } from '@components';
import { addPatternRoutes } from 'modules/Patterns/Static/patternsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddPatternForm } from 'modules/Patterns/Forms/AddPatternForm';

export const AddPattern = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Pattern' })} routes={addPatternRoutes} />
            <AddPatternForm />
        </>
    );
};
