import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import {
    GetReplenishTypesConfigsQuery,
    GetRotationsParamsQuery,
    useGetReplenishTypesConfigsQuery,
    useGetRotationsParamsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';

import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

export interface ILocationDetailsProps {
    details?: any;
}

const LocationDetails = ({ details }: ILocationDetailsProps) => {
    const { t } = useTranslation();

    const [replenishTypes, setReplenishTypes] = useState<any>();
    const [rotations, setRotations] = useState<any>();

    //To render replenish types from config table for the given scope
    const replenishTypesList = useGetReplenishTypesConfigsQuery<
        Partial<GetReplenishTypesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (replenishTypesList) {
            setReplenishTypes(replenishTypesList?.data?.listConfigsForAScope);
        }
    }, [replenishTypesList]);

    //To render rotations from parameters table for the given scope
    const rotationsList = useGetRotationsParamsQuery<Partial<GetRotationsParamsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (rotationsList) {
            setRotations(rotationsList?.data?.listParametersForAScope);
        }
    }, [rotationsList]);

    const refurbDetails = {
        ...details,
        associatedBlock: details.block.name,
        replenishType: details.replenishType
            ? replenishTypes?.find((e: any) => e.code == details.replenishType).text
            : '-',
        baseUnitRotation: details.baseUnitRotation
            ? rotations?.find((e: any) => e.code == details.baseUnitRotation).text
            : '-'
    };
    delete refurbDetails['block'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { LocationDetails };
