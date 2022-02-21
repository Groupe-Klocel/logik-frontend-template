import { DownOutlined } from '@ant-design/icons';
import { ProfileMenuType } from '@helpers';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { FC } from 'react';
export interface IProfileMenuProps {
    username: string;
    profileMenu: Array<ProfileMenuType>;
}

const ProfileMenu: FC<IProfileMenuProps> = ({ username, profileMenu }: IProfileMenuProps) => {
    const profileMenuItem = (
        <Menu>
            {profileMenu.map((menu) => (
                <Menu.Item onClick={menu.onClick} key={menu.key} icon={menu.icon}>
                    {menu.title}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <>
            <Space>
                <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
                <Dropdown overlay={profileMenuItem} placement="bottomCenter">
                    <a onClick={(e) => e.preventDefault()} style={{ color: 'black' }}>
                        {`${username}   `} <DownOutlined />
                    </a>
                </Dropdown>
            </Space>
        </>
    );
};

ProfileMenu.displayName = 'ProfileMenu';

export { ProfileMenu };
