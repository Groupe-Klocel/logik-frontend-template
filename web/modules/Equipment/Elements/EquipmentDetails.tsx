import { DetailsList } from '@components';

export interface IEquipmentDetailsProps {
    details?: any;
}

const EquipmentDetails = ({ details }: IEquipmentDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name
    };
    delete refurbDetails['stockOwner'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['id'];
    delete refurbDetails['type'];
    delete refurbDetails['status'];
    delete refurbDetails['limitType'];
    delete refurbDetails['extras'];
    if (details.limitType === 20530) {
        delete refurbDetails['nbMaxBox'];
    } else {
        delete refurbDetails['height'];
        delete refurbDetails['width'];
        delete refurbDetails['length'];
        delete refurbDetails['toleranceDimension'];
    }

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { EquipmentDetails };
