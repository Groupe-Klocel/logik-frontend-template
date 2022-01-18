import { FC, useContext } from 'react'
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';
import { LanguageSelector } from 'components/common/Dumb/LanguageSelector/LanguageSelector'
import { Logo } from 'components/common/Dumb/Logo/Logo'
import { ProfileMenu } from 'components/common/Dumb/ProfileMenu/ProfileMenu';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { SettingOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';

const StyledHeader = styled(Layout.Header)`
color: ${props => props.theme.palette.primary.contrastText};
background-color: ${props => props.theme.palette.primary.main};
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

	const profileMenuList = [
		{
			key: 'settings',
			title: t('menu:settings'),
			icon: <SettingOutlined />,
			onClick: () => console.log("f"),
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