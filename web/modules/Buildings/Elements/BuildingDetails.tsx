import { DetailsList } from '@components';

export interface IBuildingDetailsProps {
    details?: any;
}

const BuildingDetails = ({ details }: IBuildingDetailsProps) => {
    const refurbDetails = {
        ...details
    };
    delete refurbDetails['status'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { BuildingDetails };
