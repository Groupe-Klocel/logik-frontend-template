import { Switch } from 'antd';
import { FC, useState } from 'react'

export interface IMenuSwitchProps {}

export const MenuSwitch: FC<IMenuSwitchProps> = ({ }: IMenuSwitchProps) => {
	// get from context here
	const [menuCollapsed, setMenuCollapsed] = useState(true)

	const onCollapseMenu = () => {
		setMenuCollapsed(!menuCollapsed)
	}


console.log("theme",currentTheme)

	return (
		<Switch
			checked={menuCollapsed}
			onChange={onCollapseMenu}
			defaultChecked
		/>
	);
}