import { DetailsList } from '@components';

export interface IFeatureCodeDetailsProps {
    details?: any;
}

const FeatureCodeDetails = ({ details }: IFeatureCodeDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name
    };
    delete refurbDetails['id'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['stockOwner'];
    delete refurbDetails['extras'];
    delete refurbDetails['prefixBarcode'];
    delete refurbDetails['lengthBarcode'];
    delete refurbDetails['suffixBarcode'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { FeatureCodeDetails };
