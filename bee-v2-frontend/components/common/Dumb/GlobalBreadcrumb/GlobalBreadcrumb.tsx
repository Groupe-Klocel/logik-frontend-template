import { FC } from 'react'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { BreadcrumbType } from 'helpers/types/types';
import useTranslation from 'next-translate/useTranslation';

export interface IBreadcrumbProps {
	routes: Array<BreadcrumbType>
}

export const GlobalBreadcrumb: FC<IBreadcrumbProps> = ({ routes }: IBreadcrumbProps) => {
	let { t } = useTranslation('menu')

	return (
		<Breadcrumb>
			{routes.map((item, index) => {
				return item.path ?
					(<Breadcrumb.Item key={index}>
						<Link href={item.path}>{t(item.breadcrumbName)}</Link>
					</Breadcrumb.Item>)
					:
					(<Breadcrumb.Item key={index}>{t(item.breadcrumbName)}</Breadcrumb.Item>)
			})}

		</Breadcrumb>
	);
}