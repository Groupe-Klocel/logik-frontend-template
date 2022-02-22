import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addLocationRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import { AddLocationForm } from 'modules/Cartography/Elements/AddLocationForm';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export interface IAddLocationProps {}

export const AddLocation: FC<IAddLocationProps> = ({}: IAddLocationProps) => {
    let { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Location' })} routes={addLocationRoutes} />
            <StyledPageContent>
                <AddLocationForm />
            </StyledPageContent>
        </>
    );
};
