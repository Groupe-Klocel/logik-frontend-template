import { Button } from 'antd';
import { FC, ReactNode } from 'react'

export interface IDrawerButtonProps {
	title?: string
	icon?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement>;
}

export const DrawerButton: FC<IDrawerButtonProps> = ({ title, icon, onClick, ...props }: IDrawerButtonProps) => {
	return (
		<Button icon={icon} onClick={onClick} {...props} >
			{title}
		</Button>
	);
}