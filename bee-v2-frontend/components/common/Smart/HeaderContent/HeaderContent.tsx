import { PageHeader, Button } from 'antd';
import { GlobalBreadcrumb } from 'components/common/Dumb/GlobalBreadcrumb/GlobalBreadcrumb';
import { BreadcrumbType } from 'helpers/types/types';
import { FC, ReactNode } from 'react'
import styled from 'styled-components';

const StyledHeaderContent = styled(PageHeader)`
	background-color:${props => props.theme.palette.common.white};
`

export interface IHeaderContentProps {
	children?: ReactNode
	title: string
	routes: Array<BreadcrumbType>
	actions?: ReactNode
}

export const HeaderContent: FC<IHeaderContentProps> = ({ children, title, routes, actions }: IHeaderContentProps) => {
	return (

		<PageHeader
			title={title}
			breadcrumb={<GlobalBreadcrumb routes={routes} />}
			extra={actions}
		>
			{children}
		</PageHeader>

	);
}