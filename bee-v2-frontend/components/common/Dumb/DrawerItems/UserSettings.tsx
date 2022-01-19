import { ThemeSwitch } from 'components/common/Smart/Switchs/ThemeSwitch';
import { MenuSwitch } from 'components/common/Smart/Switchs/MenuSwitch';
import { FC } from 'react'

export interface IUserSettingsProps {

}

export const UserSettings: FC<IUserSettingsProps> = ({ }: IUserSettingsProps) => {
	return (
		<div>
			<div>
				COLLAPSE MENU
			<MenuSwitch />
			</div>
			<div>
				DARK MODE
			<ThemeSwitch />
			</div>
		</div>
	);
}