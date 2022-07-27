import { ProgressBar } from "components/common/dumb/ProgressBar/ProgressBar"
import { useAuth } from "context/AuthContext";
import { GetAllPurchaseOrderLinesQuery, GetPurchaseOrderLineByIdQuery, useGetAllPurchaseOrderLinesQuery, useGetPurchaseOrderLineByIdQuery } from "generated/graphql";
import { FC, useEffect, useState } from "react";

interface IPurchaseOrderProgressBarProps {
    id: string
    status: number
    done?: number
}

const PurchaseOrderProgressBar = ({id, status, done}: IPurchaseOrderProgressBarProps) => {
    const [value, setValue] = useState(status == 1005 ? 100: 0);
    const { graphqlRequestClient } = useAuth();

    const {isLoading, data, error} = useGetAllPurchaseOrderLinesQuery<GetAllPurchaseOrderLinesQuery, Error>(
        graphqlRequestClient,
        {
            filters: {
                purchaseOrderId: id
            },
            page: 1,
            itemsPerPage: 100
        }
    );
   
    useEffect(() => {
        if(data?.purchaseOrderLines && !isLoading) {
            let sumQty = 0;
            let sumReceivedQty = 0;
            data?.purchaseOrderLines.results.forEach((poline: any) => {
                sumQty += poline.quantity;
                sumReceivedQty += poline.receivedQuantity
            });
    
            if(sumQty > 0){
                const v: number = sumReceivedQty * 100 / sumQty;
                setValue(v);
            } else {
                setValue(100);
            }
        }
        if(done){
            setValue(done)
        }

    },[data]);

    return (
        <ProgressBar value={value}/>
    );
} 

export { PurchaseOrderProgressBar };