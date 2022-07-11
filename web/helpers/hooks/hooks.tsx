import { useAuth } from 'context/AuthContext';
import {
    GetAllArticlesQuery,
    useGetAllArticlesQuery,
    useGetAllBarcodesQuery,
    GetAllBarcodesQuery,
    useGetArticleIdsQuery,
    GetArticleIdsQuery,
    useGetMyInfoQuery,
    GetMyInfoQuery,
    useGetAllReturnCodesQuery,
    GetAllReturnCodesQuery,
    useGetStockOwnerIdsQuery,
    GetStockOwnerIdsQuery,
    useGetAllPurchaseOrdersQuery,
    GetAllPurchaseOrdersQuery,
    useGetAllPurchaseOrderLinesQuery,
    GetAllPurchaseOrderLinesQuery,
    useGetAllMovementsQuery,
    GetAllMovementsQuery,
    ListParametersForAScopeQuery,
    useListParametersForAScopeQuery,
    useGetAllStatusEvolutionsQuery,
    GetAllStatusEvolutionsQuery
} from 'generated/graphql';

const useArticles = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const articles = useGetAllArticlesQuery<Partial<GetAllArticlesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return articles;
};

const useArticleIds = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'name',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const articles = useGetArticleIdsQuery<Partial<GetArticleIdsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return articles;
};

const useBarcodes = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const barcodes = useGetAllBarcodesQuery<Partial<GetAllBarcodesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return barcodes;
};

const useMyInfo = () => {
    const { graphqlRequestClient } = useAuth();

    const myInfo = useGetMyInfoQuery<Partial<GetMyInfoQuery>, Error>(graphqlRequestClient);

    return myInfo;
};

const useReturnCodes = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const returnCodes = useGetAllReturnCodesQuery<Partial<GetAllReturnCodesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return returnCodes;
};

const useStockOwnerIds = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'name',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const stockOwners = useGetStockOwnerIdsQuery<Partial<GetStockOwnerIdsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return stockOwners;
};


const usePurchaseOrders = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const purchaseOrders = useGetAllPurchaseOrdersQuery<Partial<GetAllPurchaseOrdersQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return purchaseOrders;
};

const usePurchaseOrderLines = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const poLines = useGetAllPurchaseOrderLinesQuery<Partial<GetAllPurchaseOrderLinesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return poLines;
};

const useMovements = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const movements = useGetAllMovementsQuery<Partial<GetAllMovementsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return movements;
};

const useStockStatuses = () => {
    const { graphqlRequestClient } = useAuth();
    const stockStatuses = useListParametersForAScopeQuery<Partial<ListParametersForAScopeQuery>, Error>(
        graphqlRequestClient,
        {
            scope: 'stock_statuses'
        }
    );

    return stockStatuses
}


const useStatusEvolutions = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const statusEvolutions = useGetAllStatusEvolutionsQuery<Partial<GetAllStatusEvolutionsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return statusEvolutions;
};


export { 
    useArticles, 
    useBarcodes, 
    useArticleIds, 
    useMyInfo, 
    useReturnCodes, 
    useStockOwnerIds, 
    usePurchaseOrders, 
    usePurchaseOrderLines, 
    useMovements,
    useStockStatuses,
    useStatusEvolutions
};
