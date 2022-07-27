import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from 'antd';

const { Title } = Typography;

export interface IPurchaseOrderLineDetailsProps {
    details?: any;
}

const PurchaseOrderLineDetails = ({ details }: IPurchaseOrderLineDetailsProps) => {
    const { t } = useTranslation();

    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { PurchaseOrderLineDetails };
