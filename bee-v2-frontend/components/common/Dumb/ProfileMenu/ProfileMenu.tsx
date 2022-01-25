import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { ProfileMenuType } from 'helpers/types/types';
import { FC } from 'react';
export interface IProfileMenuProps {
	username: string;
	profileMenu: Array<ProfileMenuType>
}

export const ProfileMenu: FC<IProfileMenuProps> = ({ username, profileMenu }: IProfileMenuProps) => {

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
				<Avatar>{username.charAt(0).toUpperCase()}</Avatar>
				<Dropdown overlay={profileMenuItem} placement="bottomCenter">
					<a onClick={e => e.preventDefault()}>
						{`${username}   `} <DownOutlined />
					</a>
				</Dropdown>
			</Space>
		</>
	);
}