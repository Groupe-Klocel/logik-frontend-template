import { DetailsList } from '@components';
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, PaginationType } from '@helpers';
import { Typography } from 'antd';
import {
    GetStockOwnersStatusesConfigsQuery,
    useGetStockOwnersStatusesConfigsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

const { Title } = Typography;

export type StockOwnerDetailsTypeProps = {
    details?: any;
};

const StockOwnerDetails = ({ details }: StockOwnerDetailsTypeProps) => {
    const { t } = useTranslation();

    const refurbDetails = {
        ...details
    };
    delete refurbDetails['id'];
    delete refurbDetails['status'];

    const [stockOwnerStatuses, setStockOwnerStatuses] = useState<any>();

    //To render stockOwners statuses from config table for the given scope
    const stockOwnerStatusesList = useGetStockOwnersStatusesConfigsQuery<
        Partial<GetStockOwnersStatusesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerStatusesList) {
            setStockOwnerStatuses(stockOwnerStatusesList?.data?.listConfigsForAScope);
        }
    }, [stockOwnerStatusesList]);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { StockOwnerDetails };
