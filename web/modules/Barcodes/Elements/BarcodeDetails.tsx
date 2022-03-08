import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from 'antd';

const { Title } = Typography;

export interface IBarcodeDetailsProps {
    details?: any;
}

const BarcodeDetails = ({ details }: IBarcodeDetailsProps) => {
    const { t } = useTranslation();

    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { BarcodeDetails };
