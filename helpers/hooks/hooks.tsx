import { useState } from "react";

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

export { useDrawerState };

