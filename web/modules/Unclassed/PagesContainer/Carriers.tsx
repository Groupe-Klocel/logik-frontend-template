import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { carriersRoutes } from 'modules/Unclassed/Static/routes';
import useTranslation from 'next-translate/useTranslation';
import { CarriersList } from 'modules/Unclassed/Elements/CarriersList';
import styled from 'styled-components';

export interface ICarriersProps {}

export const Carriers: FC<ICarriersProps> = ({}: ICarriersProps) => {
    let { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:carriers')} routes={carriersRoutes} />
            <CarriersList />
        </>
    );
};
