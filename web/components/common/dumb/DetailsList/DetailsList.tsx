import { FC } from 'react';
import { Descriptions } from 'antd';
import { formatDigits, isFloat } from '@helpers';
import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';

export interface IDetailsListProps {
    details: unknown;
    nbColumns?: {
        xxl?: number;
        xl?: number;
        lg?: number;
        md?: number;
        sm?: number;
        xs?: number;
    };
}

const DetailsList: FC<IDetailsListProps> = ({ details, nbColumns }: IDetailsListProps) => {
    const { t } = useTranslation();

    return (
        <Descriptions column={nbColumns} size="small" bordered>
            {Object.keys(details).map((key) => (
                <Descriptions.Item key={key} label={t(`d:${key}`)}>
                    {details[key] === true ? (
                        <CheckCircleOutlined style={{ color: 'green' }} />
                    ) : details[key] === false ? (
                        <CloseSquareOutlined style={{ color: 'red' }} />
                    ) : details[key] === null ? (
                        '-'
                    ) : isFloat(details[key]) ? (
                        formatDigits(details[key])
                    ) : (
                        details[key]
                    )}
                </Descriptions.Item>
            ))}
        </Descriptions>
    );
};

DetailsList.displayName = 'DetailsList';

DetailsList.defaultProps = {
    nbColumns: {
        xxl: 3,
        xl: 3,
        lg: 2,
        md: 2,
        sm: 2,
        xs: 1
    }
};

export { DetailsList };
