import { SettingOutlined } from '@ant-design/icons';
import { Logo, UserSettings } from '@components';
import { Button, Col, Divider, Layout, Row } from 'antd';
import { useAppState, useAppDispatch } from 'context/AppContext';
import { useAuth } from 'context/AuthContext';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { cookie } from '@helpers';
import { useThemeSwitcher } from "react-css-theme-switcher";
import Typography from 'antd/lib/typography/Typography';
import { LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

const StyledHeader = styled(Layout.Header)`
padding: 0px 0px 0px 0px !important;
line-height: 50px !important;
height: 53px !important;
`

const StyledCol = styled(Col)`
  max-height: 53px;
	min-width: 53px;
	line-height: 53px;
	padding: 0px 5px 0px 5px;
	border-right: 1px solid;
	display: inline-box;
	justify-content: center;
	align-items: center;
`

const Header: FC = () => {
	const { t } = useTranslation()
	const { user, logout } = useAuth()
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

	useEffect(() => {
		const onfinish = async () => {
			if (finishSaving) {
				switcher({ theme: theme! });
				await setFinishSaving(false)
			}
		}
		onfinish()
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
			<Row wrap={false} align='middle' style={{ height: '53px' }}>
				<Link href='/' passHref><StyledCol><MenuOutlined /></StyledCol></Link>
				<StyledCol flex="auto"><Logo title='BEE 2.0' /></StyledCol>
				<StyledCol>
					<Typography>{user.username.toUpperCase()}</Typography>
				</StyledCol>
				<StyledCol>
					<Button type='text' icon={<LogoutOutlined />} onClick={() => logout()} />
				</StyledCol>
			</Row>
		</StyledHeader>
	);

}

Header.displayName = 'Header';

export { Header };
