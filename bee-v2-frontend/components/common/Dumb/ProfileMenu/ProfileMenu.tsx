import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Avatar, Space, Dropdown } from 'antd';
import { ProfileMenuType } from 'helpers/types/types';
import Link from 'next/link';
import { FC } from 'react'


export interface IProfileMenuProps {
	username: string;
	role: string;
	profileMenu: Array<ProfileMenuType>
}

export const ProfileMenu: FC<IProfileMenuProps> = ({ username, role, profileMenu }: IProfileMenuProps) => {

	const profileMenuItem = (
		<Menu>
			{profileMenu.map((menu) =>
				<Menu.Item onClick={menu.onClick}
				 key={menu.key} 
				 icon={menu.icon}>
					 {menu.title}
					 </Menu.Item>
			)}
		</Menu>
	);

	return (
		<>
			<Space>
				<Avatar icon={<UserOutlined />} />
				<Dropdown overlay={profileMenuItem} >
					<a onClick={e => e.preventDefault()}>
						{`${username} - ${role} `} <DownOutlined />
					</a>
				</Dropdown>
			</Space>
		</>
	);
}