import { GlobalBreadcrumb } from '@components';
import { BreadcrumbType } from '@helpers';
import { PageHeader } from 'antd';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';


export interface IHeaderContentProps {
	children?: ReactNode
	title: string
	routes?: Array<BreadcrumbType>
	onBack?: any
	actionsRight?: ReactNode
	actionsLeft?: ReactNode
}

const HeaderContent: FC<IHeaderContentProps> = ({ children, title, routes, actionsRight, actionsLeft , onBack }: IHeaderContentProps) => {
	return (
		<PageHeader
			title={title}
			// breadcrumb={<GlobalBreadcrumb routes={routes} />}
			onBack={onBack}
			subTitle={actionsLeft}
			extra={actionsRight}
			style={{background:'white'}}
		>
			{children}
		</PageHeader>
	);
}

HeaderContent.displayName = 'HeaderContent';

export { HeaderContent };

