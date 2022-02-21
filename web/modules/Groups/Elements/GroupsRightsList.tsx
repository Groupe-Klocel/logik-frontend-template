import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { AppTable } from '@components';
import { groupsRightsData } from 'fake-data/groups';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IGroupsRightsProps {}

export const GroupsRightsList: FC<IGroupsRightsProps> = ({}) => {
    let { t } = useTranslation();

    const columns = [
        {
            title: t('actions:action'),
            dataIndex: 'action',
            key: 'action'
        },
        {
            title: t('common:administator'),
            key: 'admin',
            render: (record: { admin: boolean }) => {
                return record.admin ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: t('common:operator'),
            key: 'ope',
            render: (record: { ope: boolean }) => {
                return record.ope ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: t('common:prepers'),
            key: 'prep',
            render: (record: { prep: boolean }) => {
                return record.prep ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        }
    ];
    return (
        <AppTable
            type="groups-rights"
            columns={columns}
            scroll={{ x: 800 }}
            data={groupsRightsData}
        />
    );
};
