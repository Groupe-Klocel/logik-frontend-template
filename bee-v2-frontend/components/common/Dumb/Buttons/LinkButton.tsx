import { Button } from 'antd';
import { FC } from 'react'
import Link from 'next/link'

export interface ILinkButtonProps {
	title: string
	path: string
	type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined
}

export const LinkButton: FC<ILinkButtonProps> = ({ title, path, type }: ILinkButtonProps) => {
	return (
		<Link href={path}>
			<Button type={type}>
				{title}
			</Button>
		</Link>
	);
}