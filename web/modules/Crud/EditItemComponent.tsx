import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';

import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { showError, useDetail } from '@helpers';
import { EditItemForm } from './submodules/EditItemForm';
import { ModelType } from 'models/Models';

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

const EditItemComponent: FC<IEditItemProps> = (props: IEditItemProps) => {
    const { t } = useTranslation();

    const { isLoading, data, error } = useDetail(
        props.id,
        props.dataModel.queryNames.detail,
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
                {data && !isLoading && data[props.dataModel.queryNames.detail] ? (
                    <EditItemForm
                        id={props.id}
                        details={data[props.dataModel.queryNames.detail]}
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

EditItemComponent.displayName = 'EditItemComponent';

export { EditItemComponent };
