import { ContentSpin } from '@components';
import { Layout, Typography } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { showError, useDetail } from '@helpers';
import { ItemDetails } from '../ItemDetails';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleItemProps {
    id: string | any;
    router: NextRouter;
    tableName: string;
    queryName: string;
    useColumns: Array<string>;
    headerComponent: any;
    extraDataComponent: any;
}

const SingleItemDetail: FC<ISingleItemProps> = (props: ISingleItemProps) => {
    const { t } = useTranslation();

    const { isLoading, data, error } = useDetail(props.id, props.queryName, props.useColumns);

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
                    data[props.queryName] !== null ? (
                        <>
                            <ItemDetails details={data[props.queryName]} />
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
