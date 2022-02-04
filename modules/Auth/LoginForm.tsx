import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Logo, StyledForm, WelcomeText, WrapperLogin } from '@components';
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface ILoginFormProps {

}

export const LoginForm: FC<ILoginFormProps> = ({ }: ILoginFormProps) => {
	let { t } = useTranslation('common')
	const { login } = useAuth()
	// TEXTS TRANSLATION

	const welcome = t('welcome')
	const username = t('username')
	const password = t('password')
	const workspace = t('workspace')
	const forgotPassword = t('forgot-password')
	const loginButton = t('actions:login')
	const errorMessageUsername = t('messages:error-message-empty-input')
	const errorMessagePassword = t('messages:error-message-empty-input')

	// END TEXTS TRANSLATION

	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		login({ username: values.username, password: values.password, workspaceId: values.workspaceId })
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);

	};

	return (
		<WrapperLogin>
			<Logo />
			<WelcomeText>
				{welcome} Bee V2
			</WelcomeText>
			<StyledForm
				form={form}
				name="login"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				scrollToFirstError
			>
				<Form.Item
					name="username"
					rules={[{ required: true, message: errorMessageUsername }]}
				>
					<Input prefix={<UserOutlined />} placeholder={username} />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: errorMessagePassword }]}
				>
					<Input
						prefix={<LockOutlined />}
						type="password"
						placeholder={password}
					/>
				</Form.Item>
				<Form.Item
					name="workspaceId"
					rules={[{ required: true, message: errorMessagePassword }]}
				>
					<Input
						type="text"
						placeholder={workspace}
					/>
				</Form.Item>
				<Form.Item>
					<a href="">
						{forgotPassword}
					</a>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" >
						{loginButton}
					</Button>
				</Form.Item>
			</StyledForm>
		</WrapperLogin>
	);
}