import { DrawerType } from "helpers/types/types";
import { createContext, useContext, useState } from "react"

interface IDrawerContext {
	isOpen: boolean;
	drawerProps: {} | DrawerType;
}

export const DrawerStateContext = createContext<IDrawerContext>({
	isOpen: false,
	drawerProps: {},
})

export const DrawerUpdaterContext = createContext<IDrawerContext>({
	isOpen: false,
	drawerProps: {},
})

export function useDrawerState() {
	return useContext(DrawerStateContext);
}

export function useDrawerUpdater() {
	return useContext(DrawerUpdaterContext);
}



