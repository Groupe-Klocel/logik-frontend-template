import { DetailsList } from '@components';

export interface IEquipmentDetailDetailsProps {
    details?: any;
}

const EquipmentDetailDetails = ({ details }: IEquipmentDetailDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name,
        associatedEquipment: details.equipment.name,
        associatedPackaging: details.packaging.name
    };
    delete refurbDetails['id'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['stockOwner'];
    delete refurbDetails['equipmentId'];
    delete refurbDetails['equipment'];
    delete refurbDetails['packagingId'];
    delete refurbDetails['packaging'];
    delete refurbDetails['preparationMode'];
    delete refurbDetails['extras'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { EquipmentDetailDetails };
