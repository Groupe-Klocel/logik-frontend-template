import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Logo, StyledForm, WelcomeText, WrapperLogin } from '@components';
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';


export const ForgotPasswordForm = () => {
    const { t } = useTranslation('common');
    const { login } = useAuth();
    // TEXTS TRANSLATION

    const forgotpassword = t('forgot-password');
    const username = t('Email');
    const password = t('password');
    const rpassword = t('re-enter-password');
    const submitButton = t('actions:submit');
    const errorMessageUsername = t('messages:error-message-empty-input');
    const errorMessagePassword = t('messages:error-message-empty-input');

    // END TEXTS TRANSLATION

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        login({
            username: values.username,
            password: values.password,
            warehouseId: process.env.NEXT_PUBLIC_WAREHOUSE_ID
        });
    };

    return (
        <div>
            <WrapperLogin className="login">
                <Logo width={100} />

                <WelcomeText>{forgotpassword}</WelcomeText>
                <StyledForm
                    form={form}
                    name="forgotpassword"
                    onFinish={onFinish}
                    autoComplete="off"
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: errorMessageUsername }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder={username} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: errorMessageUsername }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder={password} />
                    </Form.Item>
                    <Form.Item
                        name="rpassword"
                        rules={[{ required: true, message: errorMessageUsername }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder={rpassword} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {submitButton}
                        </Button>
                    </Form.Item>
                </StyledForm>
            </WrapperLogin>
        </div>
    );
};
