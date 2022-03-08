import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Logo, StyledForm, WelcomeText, WrapperLogin, LinkButton } from '@components';
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';


export const ForgotPasswordForm = () => {
	const { t } = useTranslation('common');
	const { forgotPassword } = useAuth();
	// TEXTS TRANSLATION
	const forgot = t('forgot');
	const login = t('actions:login');
	const username = t('username');
	const submitButton = t('actions:submit');
	const errorEmptyMessage = t('messages:error-message-empty-input');
	const errorWrongPassword = t('messages:error-message-wrong-password');

	//
	// END TEXTS TRANSLATION

	const [form] = Form.useForm();

	const onFinish = (values: any) => {
			forgotPassword({
				username: values.username,
			});
	};

	return (
		<div>
			<WrapperLogin className="login">
				<Logo width={100} />
				<WelcomeText>{forgot}</WelcomeText>

				<StyledForm
					form={form}
					name="forgotPassword"
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

					<Form.Item>
						<LinkButton
							title={login}
							path="/login"
							type="link"
						/>
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
