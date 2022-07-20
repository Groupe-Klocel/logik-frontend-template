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
    GetGoodsInLinesQuery
} from 'generated/graphql';
import { gql } from 'graphql-request';
import { useEffect, useState } from 'react';

const useList = (
    fields: Array<string>,
    search: any,
    page: number,
    itemsPerPage: number,
    sort: any
) => {
    const { graphqlRequestClient } = useAuth();

    const sortByDate = {
        field: 'created',
        ascending: false
    };
    const name = 'Article';

    const query = gql`
        query CustomListQuery(
            $filters: ${name}SearchFilters
            $orderBy: [${name}OrderByCriterion!]
            $page: Int!
            $itemsPerPage: Int!
        ) {
            articles(
                filters: $filters
                orderBy: $orderBy
                page: $page
                itemsPerPage: $itemsPerPage
            ) {
                count
                itemsPerPage
                totalPages
                results {
                    ${fields.join('\n')}
                }
            }
        }
    `;

    const [data, setData] = useState<any>({ isLoading: true, data: [] });

    useEffect(() => {
        let newSort;

        if (sort === null) {
            newSort = sortByDate;
        } else {
            newSort = sort;
        }

        let variables = {
            filters: search,
            orderBy: newSort,
            page: page,
            itemsPerPage: itemsPerPage
        };

        graphqlRequestClient.request(query, variables).then((result: any) => {
            setData({ isLoading: false, data: result });
        });
    }, [search, page, itemsPerPage, sort]);

    return data;
};

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
    useList,
    useArticles,
    useBlocks,
    useLocations,
    useBarcodes,
    useArticleIds,
    useMyInfo,
    useReturnCodes,
    useGoodsIns,
    useGoodsInLines
};
