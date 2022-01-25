import { ThemeSwitch } from 'components/common/Smart/Switchs/ThemeSwitch';
import { MenuSwitch } from 'components/common/Smart/Switchs/MenuSwitch';
import { FC } from 'react'
import {Row , Col, Divider} from 'antd'
import useTranslation from 'next-translate/useTranslation';
import { LanguageSelector } from 'components/common/Smart/LanguageSelector/LanguageSelector'

export interface IUserSettingsProps {

}

export const UserSettings: FC<IUserSettingsProps> = ({ }: IUserSettingsProps) => {
	let { t } = useTranslation()

	return (
		<>
		<Divider orientation="left"></Divider>
		<Row justify="space-between">
			<Col>
			 {t('common:language')}
			</Col>
			<Col>
				<LanguageSelector />
			</Col>
		</Row>
		<Divider orientation="left">{t('common:menu')}</Divider>
		<Row justify="space-between">
			<Col>
			 {t('actions:collapse-menu')}
			</Col>
			<Col>
				<MenuSwitch />
			</Col>
		</Row>
		<Divider orientation="left">{t('common:theme-settings')}</Divider>
		<Row justify="space-between">
			<Col>
			 {t('actions:dark-mode')}
			</Col>
			<Col>
			<ThemeSwitch />
			</Col>
		</Row>
		</>
	);
}