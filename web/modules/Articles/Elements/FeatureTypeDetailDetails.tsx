import { DetailsList } from '@components';

export interface IFeatureTypeDetailDetailsProps {
    details?: any;
}

const FeatureTypeDetailDetails = ({ details }: IFeatureTypeDetailDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedFeatureCode: details.featureCode.name
    };
    delete refurbDetails['id'];
    delete refurbDetails['featureType'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['stockOwner'];
    delete refurbDetails['featureCodeId'];
    delete refurbDetails['featureCode'];
    delete refurbDetails['extras'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { FeatureTypeDetailDetails };
