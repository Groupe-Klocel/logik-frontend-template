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
    useGetAllBlocksQuery,
    GetAllBlocksQuery,
    GetAllLocationsQuery,
    useGetAllLocationsQuery,
    useGetAllReturnCodesQuery,
    GetAllReturnCodesQuery,
    useGetAllPurchaseOrdersQuery,
    GetAllPurchaseOrdersQuery,
    useGetAllPurchaseOrderLinesQuery,
    GetAllPurchaseOrderLinesQuery,
    useGetAllMovementsQuery,
    GetAllMovementsQuery,
    ListParametersForAScopeQuery,
    useListParametersForAScopeQuery,
    useGetAllStatusEvolutionsQuery,
    GetAllStatusEvolutionsQuery,
    useGetAllEquipmentQuery,
    GetAllEquipmentQuery,
    useGetAllEquipmentDetailsQuery,
    GetAllEquipmentDetailsQuery,
    useGetAllGoodsInsQuery,
    GetAllGoodsInsQuery,
    useGetGoodsInLinesQuery,
    GetGoodsInLinesQuery,
    useGetAllPatternsQuery,
    GetAllPatternsQuery,
    useGetStockOwnerIdsQuery,
    GetStockOwnerIdsQuery,
    GetAllPatternPathsQuery,
    useGetAllPatternPathsQuery,
    useGetPatternIdsQuery,
    GetPatternIdsQuery,
    useGetPatternPathLocationsQuery,
    GetPatternPathLocationsQuery,
    useGetAllFeatureCodesQuery,
    GetAllFeatureCodesQuery,
    useGetAllParamsQuery,
    GetAllParamsQuery,
    useGetAllFeatureTypeDetailsQuery,
    GetAllFeatureTypeDetailsQuery,
    useGetAllArticleSetQuery,
    GetAllArticleSetQuery,
    useGetAllArticleSetDetailsQuery,
    GetAllArticleSetDetailsQuery,
    useGetAllPackagingsQuery,
    GetAllPackagingsQuery
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

const useArticleSets = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const articleSets = useGetAllArticleSetQuery<Partial<GetAllArticleSetQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return articleSets;
};

const useArticleSetDetails = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const articleSetDetails = useGetAllArticleSetDetailsQuery<
        Partial<GetAllArticleSetDetailsQuery>,
        Error
    >(graphqlRequestClient, {
        filters: search,
        orderBy: newSort,
        page: page,
        itemsPerPage: itemsPerPage
    });

    return articleSetDetails;
};

const useBlocks = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const blocks = useGetAllBlocksQuery<Partial<GetAllBlocksQuery>, Error>(graphqlRequestClient, {
        filters: search,
        orderBy: newSort,
        page: page,
        itemsPerPage: itemsPerPage
    });

    return blocks;
};
const useLocations = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const locations = useGetAllLocationsQuery<Partial<GetAllLocationsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return locations;
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

const useEquipment = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const equipment = useGetAllEquipmentQuery<Partial<GetAllEquipmentQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return equipment;
};

const useEquipmentDetails = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const equipmentDetails = useGetAllEquipmentDetailsQuery<
        Partial<GetAllEquipmentDetailsQuery>,
        Error
    >(graphqlRequestClient, {
        filters: search,
        orderBy: newSort,
        page: page,
        itemsPerPage: itemsPerPage
    });

    return equipmentDetails;
};

const useMyInfo = () => {
    const { graphqlRequestClient } = useAuth();

    const myInfo = useGetMyInfoQuery<Partial<GetMyInfoQuery>, Error>(graphqlRequestClient);

    return myInfo;
};

const useFeatureCodes = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    // default sort by creation date
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

    const featureCodes = useGetAllFeatureCodesQuery<Partial<GetAllFeatureCodesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return featureCodes;
};

const useFeatureTypes = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    // default sort by creation date
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

    // inject filter on scope
    const defaultFilter = { scope: 'feature_type' };

    let newFilter;

    if (search === null) {
        newFilter = defaultFilter;
    } else {
        newFilter = { ...search, ...defaultFilter };
    }

    const featureTypes = useGetAllParamsQuery<Partial<GetAllParamsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: newFilter,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return featureTypes;
};

const useFeatureTypeDetails = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const featureTypeDetails = useGetAllFeatureTypeDetailsQuery<
        Partial<GetAllFeatureTypeDetailsQuery>,
        Error
    >(graphqlRequestClient, {
        filters: search,
        orderBy: newSort,
        page: page,
        itemsPerPage: itemsPerPage
    });

    return featureTypeDetails;
};

const usePackagings = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const packagings = useGetAllPackagingsQuery<Partial<GetAllPackagingsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return packagings;
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

const useGoodsIns = (
    search: any,
    page: number,
    itemsPerPage: number,
    sort: any,
    language: string
) => {
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

    const goodsIns = useGetAllGoodsInsQuery<Partial<GetAllGoodsInsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,

            itemsPerPage: itemsPerPage
        }
    );

    return goodsIns;
};
const useStockStatuses = () => {
    const { graphqlRequestClient } = useAuth();
    const stockStatuses = useListParametersForAScopeQuery<
        Partial<ListParametersForAScopeQuery>,
        Error
    >(graphqlRequestClient, {
        scope: 'stock_statuses'
    });

    return stockStatuses;
};

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

    const statusEvolutions = useGetAllStatusEvolutionsQuery<
        Partial<GetAllStatusEvolutionsQuery>,
        Error
    >(graphqlRequestClient, {
        filters: search,
        orderBy: newSort,
        page: page,
        itemsPerPage: itemsPerPage
    });

    return statusEvolutions;
};

const useGoodsInLines = (
    search: any,
    page: number,
    itemsPerPage: number,
    sort: any,
    language = 'en'
) => {
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

    const goodsInLine = useGetGoodsInLinesQuery<Partial<GetGoodsInLinesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage,
            language: language
        }
    );

    return goodsInLine;
};

const usePatterns = (
    search: any,
    page: number,
    itemsPerPage: number,
    sort: any,
    language = 'en'
) => {
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

    const patterns = useGetAllPatternsQuery<Partial<GetAllPatternsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage,
            language: language
        }
    );

    return patterns;
};

const usePatternPaths = (
    search: any,
    page: number,
    itemsPerPage: number,
    sort: any,
    language = 'en'
) => {
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

    const patternPaths = useGetAllPatternPathsQuery<Partial<GetAllPatternPathsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage,
            language: language
        }
    );

    return patternPaths;
};

const usePatternIds = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

    const patterns = useGetPatternIdsQuery<Partial<GetPatternIdsQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return patterns;
};

const usePatternPathLocations = (search: any, page: number, itemsPerPage: number, sort: any) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'order',
        ascending: false
    };

    let newSort;

    if (sort === null) {
        newSort = sortByDate;
    } else {
        newSort = sort;
    }

    const patternPathLocations = useGetPatternPathLocationsQuery<
        Partial<GetPatternPathLocationsQuery>,
        Error
    >(graphqlRequestClient, {
        filters: search,
        orderBy: newSort,
        page: page,
        itemsPerPage: itemsPerPage
    });

    return patternPathLocations;
};

export {
    useArticles,
    useBlocks,
    useEquipment,
    useEquipmentDetails,
    useArticleSets,
    useArticleSetDetails,
    useLocations,
    useBarcodes,
    useFeatureCodes,
    useFeatureTypes,
    useFeatureTypeDetails,
    useArticleIds,
    useMyInfo,
    usePackagings,
    useReturnCodes,
    useGoodsIns,
    useGoodsInLines,
    usePatterns,
    useStockOwnerIds,
    usePatternPaths,
    usePatternIds,
    usePatternPathLocations,
    usePurchaseOrders,
    usePurchaseOrderLines,
    useMovements,
    useStockStatuses,
    useStatusEvolutions
};
