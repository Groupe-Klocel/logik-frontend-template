import { HeaderContent } from '@components';
import { handlingUnitsSubRoutes } from 'modules/HandlingUnits/Static/handlingUnitsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { HandlingUnitModelsList } from 'modules/HandlingUnits/Elements/HandlingUnitModelsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export const HandlingUnitModels = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:handling-unit-models')}
                routes={handlingUnitsSubRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add-handling-unit-model')}
                        path="/add-handling-unit-model"
                        type="primary"
                    />
                }
            />
            <HandlingUnitModelsList />
        </>
    );
};
