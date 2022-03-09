import { useAuth } from 'context/AuthContext';
import {
    GetAllArticlesQuery,
    useGetAllArticlesQuery,
    useGetAllBarcodesQuery,
    GetAllBarcodesQuery
} from 'generated/graphql';

const useArticles = (search: unknown, page: number, itemsPerPage: number, sort: unknown) => {
    const { graphqlRequestClient } = useAuth();

    const articles = useGetAllArticlesQuery<Partial<GetAllArticlesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: sort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return articles;
};

const useBarcodes = (search: unknown, page: number, itemsPerPage: number, sort: unknown) => {
    const { graphqlRequestClient } = useAuth();

    const barcodes = useGetAllBarcodesQuery<Partial<GetAllBarcodesQuery>, Error>(
        graphqlRequestClient,
        {
            filters: search,
            orderBy: sort,
            page: page,
            itemsPerPage: itemsPerPage
        }
    );

    return barcodes;
};

export { useArticles, useBarcodes };
