import { DetailsList } from '@components';

export interface IReturnCodeDetailsProps {
    details?: any;
}

const ReturnCodeDetails = ({ details }: IReturnCodeDetailsProps) => {
    return (
        <>
            <DetailsList details={details} />
        </>
    );
};

export { ReturnCodeDetails };
