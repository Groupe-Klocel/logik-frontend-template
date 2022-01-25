import { Switch } from 'antd';
import { FC, useState, useCallback } from 'react'
import { cookie, stringToBoolean, getMenuState } from 'helpers/utils/utils';
import { useAppState, useAppDispatch } from 'helpers/context/AppContext'

export interface IMenuSwitchProps { }

export const MenuSwitch: FC<IMenuSwitchProps> = ({ }: IMenuSwitchProps) => {
	// get state from context here
	const { isMenuCollapsed } = useAppState()
	const dispatchMenu = useAppDispatch()

	const switchMenu = useCallback(
		() => dispatchMenu({
			type: 'SWITCH_MENU',
			isMenuCollapsed: getMenuState(isMenuCollapsed),
		}),
		[dispatchMenu, isMenuCollapsed]
	)

	const onCollapseMenu = () => {
		switchMenu()
		cookie.set('isMenuCollapsed', (getMenuState(isMenuCollapsed)).toString())
	}


	return (
		<Switch
			checked={cookie.get('isMenuCollapsed') ? stringToBoolean(cookie.get('isMenuCollapsed')) : true}
			onChange={onCollapseMenu}
			defaultChecked
		/>
	);
}