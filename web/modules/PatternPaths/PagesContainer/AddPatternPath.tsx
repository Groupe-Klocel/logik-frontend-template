import { HeaderContent } from '@components';
import { addPatternPathRoutes } from 'modules/PatternPaths/Static/patternPathRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddPatternPathForm } from 'modules/PatternPaths/Forms/AddPatternPathForm';

export const AddPatternPath = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'PatternPath' })} routes={addPatternPathRoutes} />
            <AddPatternPathForm />
        </>
    );
};
