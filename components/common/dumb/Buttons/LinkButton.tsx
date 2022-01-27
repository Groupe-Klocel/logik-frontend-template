import { Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

export interface ILinkButtonProps {
	title: string
	path: string | {
		pathname: string
		query: any
	}
	type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined
}

const LinkButton: FC<ILinkButtonProps> = ({ title, path, type }: ILinkButtonProps) => {
	return (
		<Link href={path}>
			<Button type={type}>
				{title}
			</Button>
		</Link>
	);
}

LinkButton.displayName = 'LinkButton'

export { LinkButton };
