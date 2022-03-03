import { useState } from 'react';
import { useAuth } from 'context/AuthContext';
import {
    GetAllArticlesQuery,
    useGetAllArticlesQuery,
    useGetAllBarcodesQuery,
    GetAllBarcodesQuery
} from 'generated/graphql';

const useDrawerState = (initialState: { isOpen: boolean; drawerProps: any }) => {
    const [isOpen, setIsOpen] = useState(initialState.isOpen);
    const [drawerProps, setDrawerProps] = useState(initialState.drawerProps);

    const setDrawerState = ({ isOpen, drawerProps = {} }: any) => {
        setIsOpen(isOpen);
        setDrawerProps(drawerProps);
    };

    return [{ isOpen, drawerProps }, setDrawerState];
};

const useArticles = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

const useBarcodes = (search: any, page: number, itemsPerPage: number, sort: any) => {
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

export { useDrawerState, useArticles, useBarcodes };
