import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from 'antd';

const { Title } = Typography;

export interface IPurchaseOrderDetailsProps {
    details?: any;
}

const PurchaseOrderDetails = ({ details }: IPurchaseOrderDetailsProps) => {
    const { t } = useTranslation();

    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { PurchaseOrderDetails };
