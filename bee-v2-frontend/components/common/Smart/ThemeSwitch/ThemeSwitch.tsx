import { Switch } from 'antd';
import Icon from '@ant-design/icons';
import { FC } from 'react'


const LightThemeIcon = () => <Icon component={() => (<img src="/moon.svg" />)} />;
const DarkThemeIcon = () => <Icon component={() => (<img src="/sun.svg" />)} />;

export interface IThemeSwitchProps {

}

export const ThemeSwitch: FC<IThemeSwitchProps> = ({ }: IThemeSwitchProps) => {
	return (
		<Switch
			checkedChildren={<LightThemeIcon />}
			unCheckedChildren={<DarkThemeIcon />}
			defaultChecked
		/>
	);
}