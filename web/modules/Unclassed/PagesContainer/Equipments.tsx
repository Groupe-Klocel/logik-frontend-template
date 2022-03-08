import { HeaderContent } from '@components';
import { equipmentsRoutes } from 'modules/Unclassed/Static/routes';
import useTranslation from 'next-translate/useTranslation';
import { EquipmentsList } from 'modules/Unclassed/Elements/EquipmentsList';

export const Equipments = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:equipments')} routes={equipmentsRoutes} />
            <EquipmentsList />
        </>
    );
};
