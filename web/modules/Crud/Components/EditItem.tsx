import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { showError, useDetail } from '@helpers';
import { EditItemForm } from './EditItemForm';
import { ModelType } from 'modules/Crud/Models';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditItemProps {
    id: string | any;
    headerComponent: any;
    dataModel: ModelType;
    routeAfterSuccess: string;
}

const EditItem: FC<IEditItemProps> = (props: IEditItemProps) => {
    const { t } = useTranslation();

    const { isLoading, data, error } = useDetail(
        props.id,
        props.dataModel.detailQueryName,
        props.dataModel.detailColumns
    );

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    return (
        <>
            {props.headerComponent}
            <StyledPageContent>
                {data && !isLoading && data[props.dataModel.detailQueryName] ? (
                    <EditItemForm
                        id={props.id}
                        details={data[props.dataModel.detailQueryName]}
                        dataModel={props.dataModel}
                        routeAfterSuccess={props.routeAfterSuccess}
                    />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditItem.displayName = 'EditItem';

export { EditItem };
