import { DetailsList } from '@components';

export interface IFeedbackOverwriteDetailsProps {
    details?: any;
}

const FeedbackOverwriteDetails = ({ details }: IFeedbackOverwriteDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name
    };
    delete refurbDetails['stockOwner'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['movementCode'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { FeedbackOverwriteDetails };
