import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from 'antd';

const { Title } = Typography;

export interface IStockStatusDetailsProps {
    details?: any;
}

const StockStatusDetails = ({ details }: IStockStatusDetailsProps) => {
    const { t } = useTranslation();

    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { StockStatusDetails };
