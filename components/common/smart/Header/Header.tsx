import { SettingOutlined } from '@ant-design/icons';
import { Logo, ProfileMenu, UserSettings } from '@components';
import { Col, Layout, Row } from 'antd';
import { useAppState, useAppDispatch } from 'context/AppContext';
import { useAuth } from 'context/AuthContext';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { cookie } from '@helpers';
import { useThemeSwitcher } from "react-css-theme-switcher";


const StyledHeader = styled(Layout.Header)`
padding: 0px 10px 0px 10px;
line-height: 50px;
height: 53px;
`

const StyledCol = styled(Col)`
  max-height: 50px;
	padding: 0px 5px 0px 5px;
`

const Header: FC = () => {
	let { t } = useTranslation()
	const { user } = useAuth()
	const { switcher } = useThemeSwitcher();

	const [finishSaving, setFinishSaving] = useState(false)

	const dispatchDrawer = useDrawerDispatch();
	const dispatchSettings = useAppDispatch()

	const closeDrawer = useCallback(() => dispatchDrawer({ type: 'CLOSE_DRAWER' }), [
		dispatchDrawer,
	]);
	const { theme } = useAppState()

	const saveSettings = useCallback(
		() => dispatchSettings({
			type: 'SAVE_SETTINGS',
		}),
		[dispatchSettings]
	)

	const saveUserSettings = async () => {
		saveSettings()
		closeDrawer()
		await setFinishSaving(true)
	}

	useEffect( async () => {
		if(finishSaving){
			switcher({ theme: theme! });
			await setFinishSaving(false)
		}
	}, [finishSaving])


	const openUserSettingsDrawer = useCallback(
		() => dispatchDrawer({
			type: 'OPEN_DRAWER',
			title: t('menu:user-settings'),
			cancelButton: false,
			comfirmButton: true,
			comfirmButtonTitle: t('actions:save'),
			content: <UserSettings />,
			onComfirm: () => saveUserSettings(),
		}),
		[dispatchDrawer]
	)

	const profileMenuList = [
		{
			key: 'settings',
			title: t('menu:settings'),
			icon: <SettingOutlined />,
			onClick: () => openUserSettingsDrawer()
		}
	]

	return (
		<StyledHeader>
			<Row wrap={false} align='middle'>
				<StyledCol flex="10vw"><Logo /></StyledCol>
				<StyledCol flex="0 1 auto" offset={8} >
					<ProfileMenu username={user.username} profileMenu={profileMenuList} />
				</StyledCol>
			</Row>
		</StyledHeader>
	);

}

Header.displayName = 'Header';

export { Header };
