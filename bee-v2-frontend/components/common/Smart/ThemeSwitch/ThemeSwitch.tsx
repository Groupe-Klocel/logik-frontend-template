import { Switch } from 'antd';
import Icon from '@ant-design/icons';
import { FC, useState } from 'react'
import { useThemeSwitcher } from "react-css-theme-switcher";


const LightThemeIcon = () => <Icon component={() => (<img src="/moon.svg" />)} />;
const DarkThemeIcon = () => <Icon component={() => (<img src="/sun.svg" />)} />;

export interface IThemeSwitchProps {

}

export const ThemeSwitch: FC<IThemeSwitchProps> = ({ }: IThemeSwitchProps) => {
	const [isDarkMode, setIsDarkMode] = useState();
	const { switcher, currentTheme, status, themes } = useThemeSwitcher();

	const toggleTheme = (isChecked: any) => {
		setIsDarkMode(isChecked);
		switcher({ theme: isChecked ? themes.dark : themes.light });
	};

console.log("theme",currentTheme)

	return (
		<Switch
			checked={isDarkMode}
			onChange={toggleTheme}
			checkedChildren={<LightThemeIcon />}
			unCheckedChildren={<DarkThemeIcon />}
			defaultChecked
		/>
	);
}