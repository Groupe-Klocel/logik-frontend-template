import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from 'antd';

const { Title } = Typography;

export interface IGoodsInLineDetailsProps {
    details?: any;
}

const GoodsInLineDetails = ({ details }: IGoodsInLineDetailsProps) => {
    const { t } = useTranslation();

    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { GoodsInLineDetails };
