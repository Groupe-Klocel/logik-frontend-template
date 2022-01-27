import { GlobalBreadcrumb } from '@components';
import { BreadcrumbType } from '@helpers';
import { PageHeader } from 'antd';
import { FC, ReactNode } from 'react';
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

const HeaderContent: FC<IHeaderContentProps> = ({ children, title, routes, actions }: IHeaderContentProps) => {
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

HeaderContent.displayName = 'HeaderContent';

export { HeaderContent };

