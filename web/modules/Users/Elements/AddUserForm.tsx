import { WrapperForm } from '@components';
import { GroupType } from '@helpers';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { groupsData } from 'fake-data/groups';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

const { Option } = Select;

export interface IAddUserFormProps {}

export const AddUserForm: FC<IAddUserFormProps> = ({}: IAddUserFormProps) => {
    let { t } = useTranslation();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )
    const username = t('common:username');
    const pleaseInputUsername = t('messages:please-enter-a', { name: t('common:username') });
    const pleaseSelectGroup = t('messages:please-select', { name: t('common:group') });
    const selectGroup = t('messages:please-select', { name: t('common:group') });
    const submit = t('actions:submit');

    // END TEXTS TRANSLATION

    //TODO FETCH GROUP'S NAME
    // TYPED SAFE ALL

    const [newUserData, setNewUserData] = useState('');

    // Call api to create new user
    const onFinish = (values: any) => {
        alert('Success');
        setNewUserData(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        alert('Failed');
    };

    return (
        <WrapperForm>
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                scrollToFirstError
            >
                <Form.Item
                    label={username}
                    name="username"
                    rules={[{ required: true, message: pleaseInputUsername }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={selectGroup}
                    name="group"
                    hasFeedback
                    rules={[{ required: true, message: pleaseSelectGroup }]}
                >
                    <Select placeholder={pleaseSelectGroup}>
                        {groupsData.map((group: GroupType) => (
                            <Option key={group.id} value={group.name}>
                                {group.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            {submit}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
