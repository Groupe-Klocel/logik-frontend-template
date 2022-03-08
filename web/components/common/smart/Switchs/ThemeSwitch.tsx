import { Switch } from 'antd';
import { FC, useCallback } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { useAppDispatch, useAppState } from 'context/AppContext';

const LightThemeIcon = () => (
    <span role="img" aria-label="light">
        🌔
    </span>
);
const DarkThemeIcon = () => (
    <span role="img" aria-label="dark">
        🌘
    </span>
);

const ThemeSwitch: FC = () => {
    const { themes } = useThemeSwitcher();

    const { theme } = useAppState();

    const dispatchMenu = useAppDispatch();

    const switchTheme = useCallback(
        (isChecked) =>
            dispatchMenu({
                type: 'SWITCH_THEME',
                theme: isChecked ? themes.dark : themes.light
            }),
        [dispatchMenu, theme]
    );

    const toggleTheme = (isChecked: boolean) => {
        switchTheme(isChecked);
    };

    return (
        <Switch
            checked={theme === 'dark' ? true : false}
            onChange={toggleTheme}
            checkedChildren={<LightThemeIcon />}
            unCheckedChildren={<DarkThemeIcon />}
        />
    );
};

ThemeSwitch.displayName = 'ThemeSwitch';

export { ThemeSwitch };
