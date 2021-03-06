import { useState } from 'react';
import { useAuth } from 'context/AuthContext';
import {
    GetAllArticlesQuery,
    useGetAllArticlesQuery
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


export { useDrawerState, useArticles };
