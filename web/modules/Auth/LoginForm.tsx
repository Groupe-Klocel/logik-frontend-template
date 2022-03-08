import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Logo, StyledForm, WelcomeText, WrapperLogin , LinkButton} from '@components';
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';

export const LoginForm = () => {
    const { t } = useTranslation('common');
    const { login } = useAuth();
    // TEXTS TRANSLATION

    const welcome = t('welcome');
    const username = t('username');
    const password = t('password');
    const forgotPassword = t('forgot-password');
    const loginButton = t('actions:login');
    const errorEmptyMessage = t('messages:error-message-empty-input');

    // END TEXTS TRANSLATION

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        login({
            username: values.username,
            password: values.password        });
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
                    <LinkButton
                            title={forgotPassword}
                            path="/forgot-password"
                            type="link"
                        />
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
