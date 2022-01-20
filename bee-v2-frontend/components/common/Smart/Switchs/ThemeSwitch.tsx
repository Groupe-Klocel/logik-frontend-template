import { Switch } from 'antd';
import Icon from '@ant-design/icons';
import { FC, useState } from 'react'
import { useThemeSwitcher } from "react-css-theme-switcher";
import { cookie, stringToBoolean } from 'helpers/utils/utils';

const LightThemeIcon = () => <Icon component={() => (<img src="/moon.svg" />)} />;
const DarkThemeIcon = () => <Icon component={() => (<img src="/sun.svg" />)} />;

export interface IThemeSwitchProps {

}

export const ThemeSwitch: FC<IThemeSwitchProps> = ({ }: IThemeSwitchProps) => {
	const { switcher, currentTheme, themes } = useThemeSwitcher();
	const [isDarkMode, setIsDarkMode] = useState(stringToBoolean(cookie.get('darkMode')));

	const toggleTheme = (isChecked: boolean) => {
		setIsDarkMode(isChecked);
		switcher({ theme: isChecked ? themes.dark : themes.light });
		cookie.set('darkMode', isChecked.toString())
	};

	console.log("theme", currentTheme)

	return (
		<Switch
			checked={isDarkMode}
			onChange={toggleTheme}
			checkedChildren={<LightThemeIcon />}
			unCheckedChildren={<DarkThemeIcon />}
		/>
	);
}