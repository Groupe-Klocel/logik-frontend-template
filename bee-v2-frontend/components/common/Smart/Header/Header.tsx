import { FC, useCallback } from 'react'
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';
import { LanguageSelector } from 'components/common/Dumb/LanguageSelector/LanguageSelector'
import { Logo } from 'components/common/Dumb/Logo/Logo'
import { ProfileMenu } from 'components/common/Dumb/ProfileMenu/ProfileMenu';
import { ThemeSwitch } from '../Switchs/ThemeSwitch';
import { SettingOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';
import { useDrawerDispatch } from 'helpers/context/DrawerContext';
import { useAppContext } from 'helpers/context/AppContext';
import { UserSettings } from 'components/common/Dumb/DrawerItems/UserSettings';

const StyledHeader = styled(Layout.Header)`
padding: 0px 10px 0px 10px;
line-height: 50px;
height: 53px;
`

const StyledCol = styled(Col)`
  max-height: 50px;
	padding: 0px 5px 0px 5px;
`

export interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = ({ }: IHeaderProps) => {
	let { t } = useTranslation()

	const { state, dispatch } = useAppContext();

	const dispatchDrawer = useDrawerDispatch();

	const openUserSettingDrawer = useCallback(
		(variables) => dispatchDrawer({
			type: 'OPEN_DRAWER',
			drawerComponent: variables.drawerComponent,
			data: variables.data,
			title: variables.title,
			cancelButton: variables.cancelButton,
			comfirmButton: variables.comfirmButton,
		}),
		[dispatchDrawer, state]
	)

	const profileMenuList = [
		{
			key: 'settings',
			title: t('menu:settings'),
			icon: <SettingOutlined />,
			onClick: openUserSettingDrawer({
				drawerComponent: 'USER_SETTINGS', 
				data: state,
				title: t('menu:user-settings'),
				cancelButton: false,
				comfirmButton: false,
			})
		}
	]

	return (
		<StyledHeader>
			<Row wrap={false} align='middle'>
				<StyledCol flex="10vw"><Logo /></StyledCol>
				<StyledCol flex="0 1 auto" offset={8} >
					<ProfileMenu username="Demo" role="Administrateur" profileMenu={profileMenuList} />
				</StyledCol>
				<StyledCol flex="0 1 auto" >
					<LanguageSelector />
				</StyledCol>
				<StyledCol flex="0 1 auto" >
					<ThemeSwitch />
				</StyledCol>
			</Row>
		</StyledHeader>
	);
}