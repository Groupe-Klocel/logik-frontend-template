import { DetailsList } from '@components';
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, PaginationType } from '@helpers';
import { Typography } from 'antd';
import {
    GetCarriersStatusesConfigsQuery,
    useGetCarriersStatusesConfigsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

const { Title } = Typography;

export type CarrierDetailsTypeProps = {
    details?: any;
};

const CarrierDetails = ({ details }: CarrierDetailsTypeProps) => {
    const { t } = useTranslation();

    const [carrierStatuses, setCarrierStatuses] = useState<any>();

    //To render carriers statuses from config table for the given scope
    const carrierStatusesList = useGetCarriersStatusesConfigsQuery<
        Partial<GetCarriersStatusesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (carrierStatusesList) {
            setCarrierStatuses(carrierStatusesList?.data?.listConfigsForAScope);
        }
    }, [carrierStatusesList]);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { CarrierDetails };
