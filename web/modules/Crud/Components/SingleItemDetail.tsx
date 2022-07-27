import { ContentSpin, DetailsList } from '@components';
import { Layout, Typography } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { showError, useDetail } from '@helpers';
import { ModelType } from 'models/Models';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleItemProps {
    id: string | any;
    router: NextRouter;
    dataModel: ModelType;
    headerComponent: any;
    extraDataComponent: any;
}

const SingleItemDetail: FC<ISingleItemProps> = (props: ISingleItemProps) => {
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
                {data && !isLoading ? (
                    data[props.dataModel.queryNames.detail] !== null ? (
                        <>
                            <DetailsList details={data[props.dataModel.queryNames.detail]} />
                            {props.extraDataComponent}
                        </>
                    ) : (
                        <Typography>Content Does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SingleItemDetail.displayName = 'SingleItemDetail';

export { SingleItemDetail };
