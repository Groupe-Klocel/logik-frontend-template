import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import {
    GetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    GetStatusFeedbackOverwriteStatusConfigsQuery,
    useGetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    useGetStatusFeedbackOverwriteStatusConfigsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';

import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

export interface IStatusFeedbackOverwriteDetailsProps {
    details?: any;
}

const StatusFeedbackOverwriteDetails = ({ details }: IStatusFeedbackOverwriteDetailsProps) => {
    const { t } = useTranslation();

    const [statusFeedbackOverwriteStatus, setStatusFeedbackOverwriteStatus] = useState<any>();
    const [statusFeedbackOverwriteObjectType, setStatusFeedbackOverwriteObjectType] =
        useState<any>();

    // CONFIG : status
    const statusFeedbackOverwriteStatusList = useGetStatusFeedbackOverwriteStatusConfigsQuery<
        Partial<GetStatusFeedbackOverwriteStatusConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteStatusList) {
            setStatusFeedbackOverwriteStatus(
                statusFeedbackOverwriteStatusList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteStatusList]);

    // CONFIG : object-type
    const statusFeedbackOverwriteObjectTypeList =
        useGetStatusFeedbackOverwriteObjectTypeConfigsQuery<
            Partial<GetStatusFeedbackOverwriteObjectTypeConfigsQuery>,
            Error
        >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteObjectTypeList) {
            setStatusFeedbackOverwriteObjectType(
                statusFeedbackOverwriteObjectTypeList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteObjectTypeList]);

    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name,
        status: details.status
            ? statusFeedbackOverwriteStatus?.find((e: any) => e.code == details.status).text
            : '-',
        objectType: details.objectType
            ? statusFeedbackOverwriteObjectType?.find((e: any) => e.code == details.objectType).text
            : '-'
    };
    delete refurbDetails['stockOwner'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { StatusFeedbackOverwriteDetails };
