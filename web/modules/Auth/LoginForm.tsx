import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Logo, StyledForm, WelcomeText, WrapperLogin, LinkButton } from '@components';
import { cookie, showSuccess } from '@helpers';
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppState } from 'context/AppContext';
import { useAuth } from 'context/AuthContext';
import { gql, GraphQLClient } from 'graphql-request';
import useTranslation from 'next-translate/useTranslation';
import router from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export const LoginForm = () => {
    const { t } = useTranslation('common');
    const { login, graphqlRequestClient, isAuthenticated } = useAuth();
    // TEXTS TRANSLATION

    const welcome = t('welcome');
    const username = t('username');
    const password = t('password');
    const forgotPassword = t('forgot-password');
    const loginButton = t('actions:login');
    const errorEmptyMessage = t('messages:error-message-empty-input');
    const { user } = useAppState();

    const dispatchUser = useAppDispatch();
    const setUserInfo = useCallback(
        (newUser) =>
            dispatchUser({
                type: 'SET_USER_INFO',
                user: newUser
            }),
        [dispatchUser, user]
    );

    // END TEXTS TRANSLATION

    const [form] = Form.useForm();
    useEffect(() => {
        if (isAuthenticated) {
            const token = cookie.get('token');
            if (token) {
                try {
                    const query = gql`
                        query GetMyInfo {
                            me {
                                __typename
                                ...on WarehouseWorker {
                                    id
                                    password
                                    username
                                    warehouseId
                                    roleId
                                    created
                                    createdBy
                                    modified
                                    modifiedBy
                                }
                        
                                ...on IntegratorUser {
                                    id
                                    password
                                    email
                                    integratorId
                                    roleId
                                    integrator {
                                        id
                                        name
                                        awsAccessKeyId
                                        awsSecretAccessKey
                                    }
                                    role {
                                        id
                                        name
                                        permissions {
                                            id
                                            table
                                            mode
                                            roleId
                                            created
                                            createdBy
                                            modified
                                            modifiedBy
                                        }
                                        created
                                        createdBy
                                        modified
                                        modifiedBy
                                    }
                                    created
                                    createdBy
                                    modified
                                    modifiedBy
                                    isAdmin
                                }
                        
                            }
                        }
                    `;

                    graphqlRequestClient.request(query).then((data: any) => {
                        console.log(data)
                        if (data.me) {
                            setUserInfo(data.me);
                            router.push('/');
                            showSuccess(t('messages:login-success'));
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }, [isAuthenticated]);

    const onFinish = (values: any) => {
        login({
            username: values.username,
            password: values.password
        });
    };

    return (
        <div>
            <WrapperLogin className="login">
                <Logo width={100} />

                <WelcomeText>{welcome} Bee V2</WelcomeText>
                <StyledForm
                    form={form}
                    name="login"
                    onFinish={onFinish}
                    autoComplete="off"
                    scrollToFirstError
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: errorEmptyMessage }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder={username} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: errorEmptyMessage }]}
                    >
                        <Input
                            style={{ color: '#000' }}
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder={password}
                        />
                    </Form.Item>

                    <Form.Item>
                        <LinkButton title={forgotPassword} path="/forgot-password" type="link" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {loginButton}
                        </Button>
                    </Form.Item>
                </StyledForm>
            </WrapperLogin>
        </div>
    );
};
