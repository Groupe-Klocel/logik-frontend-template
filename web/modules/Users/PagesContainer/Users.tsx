import { PageContentWrapper } from '@components';
import { Space } from 'antd';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { UsersList } from 'modules/Users/Elements/UsersList';
import { usersRoutes } from 'modules/Users/Static/usersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { HeaderContent } from '@components';

export interface IUsersProps {}

export const Users: FC<IUsersProps> = ({}: IUsersProps) => {
    let { t } = useTranslation();

    return (
        <>
            <HeaderContent
                title={t('common:users')}
                routes={usersRoutes}
                actionsRight={
                    <Space>
                        {/* <DrawerButton icon={< SearchOutlined />} onClick={() => setDrawerOptions({ isOpen: true, drawerProps: searchDrawerProps })} title={t('actions:search')} /> */}
                        <LinkButton
                            title={t('actions:add2', { name: t('common:user') })}
                            path="/add-user"
                            type="primary"
                        />
                    </Space>
                }
            />
            <UsersList />
        </>
    );
};
