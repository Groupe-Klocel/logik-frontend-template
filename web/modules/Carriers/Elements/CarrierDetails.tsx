import { DetailsList } from '@components';
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, PaginationType } from '@helpers';
import { Typography } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

const { Title } = Typography;

export type CarrierDetailsTypeProps = {
    details?: any;
};

const CarrierDetails = ({ details }: CarrierDetailsTypeProps) => {
    const { t } = useTranslation();

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
