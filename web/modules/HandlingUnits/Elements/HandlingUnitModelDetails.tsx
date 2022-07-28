import { DetailsList } from '@components';

export interface IHandlingUnitModelDetailsProps {
    details?: any;
}

const HandlingUnitModelDetails = ({ details }: IHandlingUnitModelDetailsProps) => {
    const refurbDetails = {
        ...details
    };
    delete refurbDetails['id'];
    delete refurbDetails['status'];
    delete refurbDetails['type'];
    delete refurbDetails['category'];
    delete refurbDetails['parentHandlingUnitModelId'];

    console.log(refurbDetails);

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { HandlingUnitModelDetails };
