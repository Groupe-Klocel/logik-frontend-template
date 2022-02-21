import { getMenuState } from '@helpers';
import { Switch } from 'antd';
import { useAppDispatch, useAppState } from 'context/AppContext';
import { FC, useCallback } from 'react';

const MenuSwitch: FC = () => {
    const { isSettingMenuCollapsed } = useAppState();

    const dispatchMenu = useAppDispatch();

    const switchMenuSetting = useCallback(
        () =>
            dispatchMenu({
                type: 'SWITCH_MENU_SETTING',
                isSettingMenuCollapsed: !isSettingMenuCollapsed
            }),
        [dispatchMenu, isSettingMenuCollapsed]
    );

    const onCollapseMenu = () => {
        switchMenuSetting();
    };

    return <Switch checked={isSettingMenuCollapsed} onChange={onCollapseMenu} defaultChecked />;
};

MenuSwitch.displayName = 'MenuSwitch';

export { MenuSwitch };
