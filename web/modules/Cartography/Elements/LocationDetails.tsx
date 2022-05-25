import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';

import useTranslation from 'next-translate/useTranslation';
import { Typography } from 'antd';

const { Title } = Typography;

export interface ILocationDetailsProps {
    details?: any;
}

const LocationDetails = ({ details }: ILocationDetailsProps) => {
    const { t } = useTranslation();

    let refurbDetails = { ...details, associatedBlock: details.block.name };
    delete refurbDetails['block'];
    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { LocationDetails };
