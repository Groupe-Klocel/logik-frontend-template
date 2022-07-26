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
    useGetAllGoodsInsQuery,
    GetAllGoodsInsQuery,
    useGetGoodsInLinesQuery,
    GetGoodsInLinesQuery,
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

const useMyInfo = () => {
    const { graphqlRequestClient } = useAuth();

    const myInfo = useGetMyInfoQuery<Partial<GetMyInfoQuery>, Error>(graphqlRequestClient);

    return myInfo;
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
            itemsPerPage: itemsPerPage,
            language: language
        }
    );

    return goodsIns;
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

export {
    useArticles,
    useBlocks,
    useArticleSets,
    useArticleSetDetails,
    useLocations,
    useBarcodes,
    useArticleIds,
    useMyInfo,
    usePackagings,
    useReturnCodes,
    useGoodsIns,
    useGoodsInLines
};
