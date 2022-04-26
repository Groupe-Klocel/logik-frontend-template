import { Logo, StyledForm, WelcomeText, WrapperLogin, LinkButton } from '@components';
import { showError } from '@helpers';
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export const ResetPasswordForm = () => {
    const { t } = useTranslation('common');
    const { resetPassword } = useAuth();
    const router = useRouter();
    const token = router.query.token;
    // TEXTS TRANSLATION

    const resetPass = t('actions:reset-password');
    const password = t('password');
    const comfirmPass = t('comfirm-password');
    const login = t('actions:login');
    const submitButton = t('actions:submit');
    const errorMessagePassword = t('messages:error-message-empty-input');
    const errorWrongPassword = t('messages:error-message-wrong-password');

    //
    // END TEXTS TRANSLATION

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        if (token) {
            resetPassword({
                token: token,
                password: values.password,
                confirmPassword: values.confirm
            });
        } else {
            showError('Token was not set exactly');
            // redirect to forgot password
            router.push('/forgot-password');
        }
    };

    return (
        <div>
            <WrapperLogin className="login">
                <Logo width={100} />

                <WelcomeText>{resetPass}</WelcomeText>
                <StyledForm
                    form={form}
                    name="forgotPassword"
                    onFinish={onFinish}
                    autoComplete="off"
                    scrollToFirstError
                >
                    <Form.Item
                        name="password"
                        label={password}
                        rules={[
                            {
                                required: true,
                                message: errorMessagePassword
                            }
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label={comfirmPass}
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: errorMessagePassword
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error(errorWrongPassword));
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <LinkButton title={login} path="/login" type="link" />
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
