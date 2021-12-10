
import {
	SettingOutlined,
	SlidersOutlined,
	ApartmentOutlined,
	AuditOutlined,
	ExportOutlined,
	HourglassOutlined,
	QuestionCircleOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import Link from 'next/link';
import React, { FC } from 'react'
import useTranslation from 'next-translate/useTranslation';

const { SubMenu } = Menu;

export interface IAppMenuProps {
}


export const AppMenu: FC<IAppMenuProps> =
	({ }: IAppMenuProps) => {
		let { t } = useTranslation()
		return (
			<Menu theme="dark" mode="inline">
				<SubMenu icon={<AuditOutlined />} key="administration" title={t("common:administration")}>
					<SubMenu key="administration-access-management" title={t("common:access-management")}>
						<Menu.Item key="administration-access-management-users"><Link href='/users'>Users</Link></Menu.Item>
						<Menu.Item key="administration-access-management-groups"><Link href='/groups'>Groups</Link></Menu.Item>
						<SubMenu key="administration-rights" title="Rights">
							<Menu.Item key="administration-rights-group-of-users"><Link href='/group-of-users'>Group of users</Link></Menu.Item>
							<Menu.Item key="administration-rights-group-rights"><Link href='/groups-rights'>Groups rights</Link></Menu.Item>
							<Menu.Item key="administration-rights-users-rights"><Link href='/users-rights'>Users rights</Link></Menu.Item>
						</SubMenu>
					</SubMenu>
					<SubMenu key="administration-feedbacks" title={t("common:feedbacks")}>
						<Menu.Item key="administration-feedbacks-movements-config"><Link href='/movement-config'>Movements config.</Link></Menu.Item>
						<Menu.Item key="administration-feedbacks-status-configuration"><Link href='/status-configuration'>Status configuration</Link></Menu.Item>
						<Menu.Item key="administration-feedbacks-force-reading"><Link href='/force-reading'>Force reading</Link></Menu.Item>
						<Menu.Item key="administration-feedbacks-force-writing"><Link href='/force-writing'>Force writing</Link></Menu.Item>
						<Menu.Item key="administration-feedbacks-send-stock-image"><Link href='/send-stock-image'>Send stock image</Link></Menu.Item>
					</SubMenu>
					<Menu.Item key="administration-settings" >
						<Link href='/settings'>Settings</Link>
					</Menu.Item>
				</SubMenu>

				<SubMenu key="configuration" icon={<SettingOutlined />} title={t("common:configuration")}>
					<Menu.Item key="configuration-companies" >
						<Link href='/companies'>Companies</Link>
					</Menu.Item>
					<SubMenu key="configuration-cartography" title="Cartography">
						<Menu.Item key="configuration-cartography-blocs"><Link href='/blocs'>Blocs</Link></Menu.Item>
						<Menu.Item key="configuration-cartography-locations"><Link href='/locations'>Locations</Link></Menu.Item>
					</SubMenu>
					<Menu.Item key="configuration-stock-statuses" >
						<Link href='/stock-statuses'>Stock Statuses</Link>

					</Menu.Item>
					<SubMenu key="configuration-articles" title="Articles">
						<SubMenu key="configuration-articles-features" title="Features">
							<Menu.Item key="configuration-articles-features-codes"><Link href='/features-codes'>Features Codes</Link></Menu.Item>
							<Menu.Item key="configuration-articles-features-types"><Link href='/features-types'>Features Types</Link></Menu.Item>
						</SubMenu>
						<Menu.Item key="configuration-articles-articles">	<Link href='/articles'>Articles</Link></Menu.Item>
						<Menu.Item key="configuration-articles-barcodes">	<Link href='/barcodes'>Barcodes</Link></Menu.Item>
						<Menu.Item key="configuration-articles-blacklisted-barcodes">	<Link href='/blacklisted-barcodes'>Blacklisted Barcodes</Link></Menu.Item>
						<Menu.Item key="configuration-articles-sets">	<Link href='/sets'>Sets</Link></Menu.Item>
					</SubMenu>
					<Menu.Item key="configuration-packagings" >
						<Link href='/packagings'>Packagings</Link>
						Packagings
					</Menu.Item>
					<Menu.Item key="configuration-carriers" >
						<Link href='/carriers'>Carriers</Link>
						Carriers
					</Menu.Item>
					<Menu.Item key="configuration-equipments" >
						<Link href='/equipments'>	Equipments</Link>
						Equipments
					</Menu.Item>
					<Menu.Item key="configuration-return-codes" >
						<Link href='/return-codes'>	Return Codes</Link>
					</Menu.Item>
				</SubMenu>

				<SubMenu icon={<ApartmentOutlined />} key="stock-management" title={t("common:stock-management")}>
					<Menu.Item key="stock-management-contents" >
						<Link href='/contents'>Contents</Link>
					</Menu.Item>
					<Menu.Item key="stock-management-purchase-orders" >
						<Link href='/purchase-orders'>Purchase Orders</Link>
					</Menu.Item>
					<Menu.Item key="stock-management-goods-ins" >
						<Link href='/goods-ins'>	Goods Ins</Link>
					</Menu.Item>
					<Menu.Item key="stock-management-movements" >
						<Link href='/movements'>Movements</Link>

					</Menu.Item>
					<SubMenu key="stock-management-cycle-counts" title="Cycle Counts">
						<Menu.Item key="stock-management-cycle-counts-cyle-counts"><Link href='/cycle-counts'>	Cycle Counts</Link>Cycle Counts</Menu.Item>
						<Menu.Item key="stock-management-cycle-counts-recommended"><Link href='/recommended'>	Recommended</Link>Recommended</Menu.Item>
					</SubMenu>
				</SubMenu>

				<SubMenu icon={<HourglassOutlined />} key="preparation-management" title={t("common:preparation-management")}>
					<Menu.Item key="preparation-management-deliveries"><Link href='/deliveries'>Deliveries</Link></Menu.Item>
					<Menu.Item key="preparation-management-boxes"><Link href='/boxes'>Boxes</Link></Menu.Item>
					<Menu.Item key="preparation-management-rounds"><Link href='/rounds'>	Rounds</Link></Menu.Item>
					<Menu.Item key="preparation-management-box-checking"><Link href='/box-checking'>Box checking</Link></Menu.Item>
					<Menu.Item key="preparation-management-manual-recubing"><Link href='/manual-recubing'>	Manual recubing</Link></Menu.Item>
					<Menu.Item key="preparation-management-loads"><Link href='/loads'>Loads</Link></Menu.Item>
				</SubMenu>

				<SubMenu icon={<SlidersOutlined />} key="monitoring" title={t("common:monitoring")}>
					<Menu.Item key="monitoring-dashboard"><Link href='/dashboard'>	Dashboard</Link></Menu.Item>
					<Menu.Item key="monitoring-warnings"><Link href='/warning'>	Warning</Link></Menu.Item>
					<Menu.Item key="monitoring-status-evolutions"><Link href='/status-evolutions'>	Status Evolutions</Link></Menu.Item>
				</SubMenu>

				<Menu.Item icon={<QuestionCircleOutlined />} key="about" >
					<Link href='/about'>{t("common:about")}</Link>
				</Menu.Item>
				<Menu.Item icon={<ExportOutlined />} key="singout" >
				{t("common:logout")}
				</Menu.Item>
			</Menu>
		)
	}

AppMenu.displayName = 'AppMenu'

export default AppMenu
