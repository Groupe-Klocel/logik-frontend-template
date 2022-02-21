import { useState } from "react";
import { useAuth } from 'context/AuthContext';
// import { GetAllArticlesQuery, useGetAllArticlesQuery } from 'generated/graphql';

const useDrawerState = (initialState: { isOpen: boolean; drawerProps: any }) => {
	const [isOpen, setIsOpen] = useState(initialState.isOpen)
	const [drawerProps, setDrawerProps] = useState(initialState.drawerProps)

	console.log('isOpen', isOpen)

	const setDrawerState = ({ isOpen, drawerProps = {} }: any) => {
		setIsOpen(isOpen)
		setDrawerProps(drawerProps)
	}

	return [{ isOpen, drawerProps }, setDrawerState]
}

const useArticles = (search: any, page: number, itemsPerPage: number) => {
	// const { graphqlRequestClient } = useAuth()

	// const articles = useGetAllArticlesQuery<Partial<GetAllArticlesQuery>, Error>(graphqlRequestClient, {
	// 	filters: search,
	// 	orderBy: null,
	// 	page: page,
	// 	itemsPerPage: itemsPerPage,
	// })
	const articles = null;

	return articles
}


export { useDrawerState, useArticles };

