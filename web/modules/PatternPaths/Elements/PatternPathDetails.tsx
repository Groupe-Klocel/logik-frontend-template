import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from 'antd';

const { Title } = Typography;

export interface IPatternPathsDetailsProps {
    details?: any;
}

const PatternPathDetails = ({ details }: IPatternPathsDetailsProps) => {
    const { t } = useTranslation();

    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { PatternPathDetails };
