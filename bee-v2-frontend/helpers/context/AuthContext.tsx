import { LoginMutation, LoginMutationVariables, useLoginMutation } from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import { OnlyChildrenType } from 'helpers/types/types';
import { cookie, decodeJWT } from 'helpers/utils/utils';
import { useRouter } from 'next/router';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';

interface IAuthContext {
	isAuthenticated: boolean;
	user: any;
	login: Function;
	loading: boolean;
	logout: Function;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export const AuthProvider: FC<OnlyChildrenType> = ({ children }: OnlyChildrenType) => {
  const router = useRouter()
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	// Get access token from cookies , decode it and set user
	useEffect(() => {
		async function loadUserFromCookie() {
			const token = cookie.get('token')
			if (token) {
				console.log("Got a token in the cookie, let's see if it is valid")
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
				console.log("Got token")
				cookie.set('token', data.login.accessToken)
				// Set Bearer JWT token to the header for future request
				// api.defaults.headers.Authorization = `Bearer ${token.token}`
				const user = decodeJWT(data.login.accessToken)
				setUser(user)
				router.push('/')
				console.log("Got user", user)
			}
		}

	})

	const login = async ({ username, password, workspaceId }: LoginMutationVariables) => {
		mutate({ username, password, workspaceId })
	}

	const logout = () => {
		cookie.remove('token')
		setUser(null)
		router.push('/login')
		// Remove Bearer JWT token from header
	}


	return (
		<AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
			{children}
		</AuthContext.Provider>
	)
}



export const useAuth = () => useContext(AuthContext)