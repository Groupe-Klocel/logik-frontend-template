import { createContext, ReactNode, useContext, useMemo, FC, useState, useReducer } from "react";
import { AppReducer, initialState } from "helpers/reducers/AppReducer";

interface IAppContext {
	theme: "dark" | "light";
	isMenuCollapsed: boolean;
	locale: string;
}

interface IAppWrapper {
	children: ReactNode;
}

// get state from cookies here
const AppContext = createContext<IAppContext>({});

// AppWrapper which will pass down the context to the rest of the app
export const AppWrapper: FC<IAppWrapper> = ({ children }) => {

	const { state, dispatch } = useReducer(AppReducer, initialState);

	const contextValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
