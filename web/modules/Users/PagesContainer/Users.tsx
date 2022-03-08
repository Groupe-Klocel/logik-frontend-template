import { Space } from 'antd';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { UsersList } from 'modules/Users/Elements/UsersList';
import { usersRoutes } from 'modules/Users/Static/usersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { HeaderContent } from '@components';

export const Users = () => {
    const { t } = useTranslation();

    return (
        <>
            <HeaderContent
                title={t('common:users')}
                routes={usersRoutes}
                actionsRight={
                    <Space>
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
