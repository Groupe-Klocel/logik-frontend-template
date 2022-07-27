import { DetailsList } from '@components';

export interface IStatusFeedbackOverwriteDetailsProps {
    details?: any;
}

const StatusFeedbackOverwriteDetails = ({ details }: IStatusFeedbackOverwriteDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name
    };
    delete refurbDetails['stockOwner'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['objectType'];
    delete refurbDetails['status'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { StatusFeedbackOverwriteDetails };
