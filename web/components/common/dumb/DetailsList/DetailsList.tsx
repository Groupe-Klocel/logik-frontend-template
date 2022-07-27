import { FC } from 'react';
import { Descriptions } from 'antd';
import { formatDigits, isFloat } from '@helpers';
import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';

export interface IDetailsListProps {
    details: any;
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
    const tmp_detail = { ...details };
    delete tmp_detail['id'];
    if ('article' in tmp_detail) delete tmp_detail['article'];

    return (
        <Descriptions column={nbColumns} size="small" bordered>
            {Object.keys(tmp_detail).map((key) => (
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
