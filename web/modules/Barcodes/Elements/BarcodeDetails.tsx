import { DetailsList, LinkButton } from '@components';
import { EyeTwoTone } from '@ant-design/icons';
import { pathParams } from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Divider, Table, Typography } from 'antd';

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
