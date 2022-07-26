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
    resolverName: string,
    queryName: string,
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

    const query = gql`
        query CustomListQuery(
            $filters: ${resolverName}SearchFilters
            $orderBy: [${resolverName}OrderByCriterion!]
            $page: Int!
            $itemsPerPage: Int!
        ) {
            ${queryName}(
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

const useDetail = (id: string, queryName: string, fields: Array<string>) => {
    const { graphqlRequestClient } = useAuth();

    const query = gql`query ${queryName}($id: String!, $language: String = "en") {
        ${queryName}(id: $id, language: $language) {
            ${fields.join('\n')}
        }
    }`;

    const [data, setData] = useState<any>({ isLoading: true, data: [], error: false });
    useEffect(() => {
        let variables = {
            id: id
        };
        console.log(query);
        graphqlRequestClient
            .request(query, variables)
            .then((result: any) => {
                setData({ isLoading: false, data: result, error: false });
            })
            .catch((error: any) => setData({ isLoading: false, error: true }));
    }, [id]);
    return data;
};

const useUpdate = (resolverName: string, id: string, queryName: string, fields: Array<string>) => {
    const { graphqlRequestClient } = useAuth();

    const query = gql`mutation ${queryName}($id: String!, $input: Update${resolverName}Input!) {
        ${queryName}(id: $id, input: $input) {
            ${fields.join('\n')}
        }
      }`;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<any>({ data: null, success: false });

    let mutate = (variables: any) => {
        setIsLoading(true);
        graphqlRequestClient
            .request(query, variables)
            .then((result: any) => {
                setIsLoading(false);
                setResult({ data: result, success: true });
            })
            .catch((error: any) => {
                setResult({ data: null, success: false });
                setIsLoading(false);
            });
    };

    return { isLoading, result, mutate };
};

const useExport = (resolverName: string, queryName: string) => {
    const { graphqlRequestClient } = useAuth();

    const query = gql`mutation ${queryName}($format: ExportFormat, $compression: ExportCompression, $separator: String, $orderBy: [${resolverName}OrderByCriterion!], $filters: ${resolverName}ExportFilters) {
        ${queryName}(
          format: $format
          compression: $compression
          separator: $separator
          orderBy: $orderBy
          filters: $filters
        ) {
          url
        }
      }`;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<any>({ data: null, success: false });

    let mutate = (variables: any) => {
        setIsLoading(true);
        graphqlRequestClient
            .request(query, variables)
            .then((result: any) => {
                setIsLoading(false);
                setResult({ data: result, success: true });
            })
            .catch((error: any) => {
                setResult({ data: null, success: false });
                setIsLoading(false);
            });
    };

    return { isLoading, result, mutate };
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
    useDetail,
    useUpdate,
    useExport,
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
