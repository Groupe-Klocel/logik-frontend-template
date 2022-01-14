import { useState } from "react"

export const useDrawerState = (initialState: { isOpen: boolean; drawerProps: any }) => {
	const [isOpen, setIsOpen] = useState(initialState.isOpen)
	const [drawerProps, setDrawerProps] = useState(initialState.drawerProps)

	const setDrawerState = ({ isOpen, drawerProps = {} }) => {
		setIsOpen(isOpen)
		setDrawerProps(drawerProps)
	}

	return [{ isOpen, drawerProps }, setDrawerState]
}