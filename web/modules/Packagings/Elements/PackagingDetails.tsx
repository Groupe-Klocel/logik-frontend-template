import { DetailsList } from '@components';

export interface IPackagingDetailsProps {
    details?: any;
}

const PackagingDetails = ({ details }: IPackagingDetailsProps) => {
    const refurbDetails = {
        ...details,
        emptyWeight: details.weight
    };
    delete refurbDetails['id'];
    delete refurbDetails['status'];
    delete refurbDetails['weight'];
    delete refurbDetails['system'];
    delete refurbDetails['extras'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { PackagingDetails };
