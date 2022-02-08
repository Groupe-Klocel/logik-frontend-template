import { cookie, decodeJWT, OnlyChildrenType, showError, showSuccess } from '@helpers';
import { LoginMutation, LoginMutationVariables, useLoginMutation } from 'generated/graphql';
import { GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/router';
import React, { createContext, FC, useContext, useEffect, useState, useCallback } from 'react';


interface IAuthContext {
	isAuthenticated: boolean;
	user?: any;
	login: Function;
	loading: boolean;
	logout: Function;
	graphqlRequestClient: any;
}

// refactoring need to typesafe https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
const AuthContext = createContext<IAuthContext>(undefined!);

export const AuthProvider: FC<OnlyChildrenType> = ({ children }: OnlyChildrenType) => {

	const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string);

	const router = useRouter()
	const [user, setUser] = useState(null)
	const [graphqlRequestClient, setGraphqlRequestClient] = useState(graphqlClient)
	const [loading, setLoading] = useState(true)

	// Get access token from cookies , decode it and set user
	useEffect(() => {
		async function loadUserFromCookie() {
			const token = cookie.get('token')
			if (token) {
				console.log("Got a token in the cookie, let's see if it is valid")
				await setHeader(token)
				console.log("client", graphqlRequestClient)
				const user = decodeJWT(token)
				console.log(user)
				if (user) setUser(user);
			}
			setLoading(false)
		}
		loadUserFromCookie()
	}, [])

	const { mutate } = useLoginMutation<Error>(graphqlRequestClient, {
		onSuccess: (data: LoginMutation, _variables: LoginMutationVariables, _context: unknown) => {
			if (data?.login?.accessToken) {
				console.log("Got token", data.login.accessToken)
				cookie.set('token', data.login.accessToken)
				// Set Bearer JWT token to the header for future request
				setHeader(data.login.accessToken)
				const user = decodeJWT(data.login.accessToken)
				setUser(user)
				router.push('/')
				console.log("Got user", user)
				showSuccess('You are now login')
			}
		},
		onError: (error) => {
			showError('There is an error with your credentials')
		},
	})

	const login = async ({ username, password, workspaceId }: LoginMutationVariables) => {
		mutate({ username, password, workspaceId })
	}

	const logout = () => {
		cookie.remove('token')
		setUser(null)
		// Remove Bearer JWT token from header
		setHeader('NOP')
		router.push('/login')
	}

	const setHeader = (token: string) => {
		const requestHeader = {
			"X-API-Seed": "foo",
			authorization: `Bearer ${token}`,
		};
		const graphqlClientWithHeader = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
			headers: requestHeader,
		});
		setGraphqlRequestClient(graphqlClientWithHeader)
	}


	return (
		<AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, graphqlRequestClient }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)