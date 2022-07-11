import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';

export type BarcodeDetailsTypeProps = {
    details?: any;
};

const BarcodeDetails = ({ details }: BarcodeDetailsTypeProps) => {
    const { t } = useTranslation();

    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name
    };
    delete refurbDetails['stockOwner'];
    delete refurbDetails['rotation'];
    delete refurbDetails['preparationMode'];
    delete refurbDetails['id'];
    delete refurbDetails['stockOwnerId'];

    console.log(details);
    console.log(refurbDetails);
    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { BarcodeDetails };
