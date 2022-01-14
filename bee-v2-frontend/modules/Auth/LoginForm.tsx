import { FC, useState} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { WrapperLogin } from 'components/common/Dumb/Wrappers/Wrappers'
import { StyledForm } from 'components/common/Dumb/Forms/Forms'
import { WelcomeText } from 'components/common/Dumb/Text/Text'
import useTranslation from 'next-translate/useTranslation';
import { Logo } from 'components/common/Dumb/Logo/Logo'
import Link from 'next/link'
export interface ILoginFormProps {

}

export const LoginForm: FC<ILoginFormProps> = ({ }: ILoginFormProps) => {
	let { t } = useTranslation('common')

	// TEXTS TRANSLATION
	
	const welcome = t('welcome')
	const username = t('username')
	const password = t('password')
	const forgotPassword = t('forgot-password')
	const login = t('actions:login')
	const errorMessageUsername = t('messages:error-message-empty-input')
	const errorMessagePassword = t('messages:error-message-empty-input')

	// END TEXTS TRANSLATION


	const [loginData, setLoginData] = useState('')

	const onFinish = (values: any) => {
		console.log('Success:', values);
		setLoginData(values)
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
				name="login"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				scrollToFirstError
			>
		 <Form.Item
        name="username"
        rules={[{ required: true, message: errorMessageUsername  }]}
      >
        <Input prefix={<UserOutlined  />} placeholder={username} />
      </Form.Item>
      <Form.Item
        name="password"
				hasFeedback
        rules={[{ required: true, message: errorMessagePassword }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder={password}
        />
      </Form.Item>
      <Form.Item>
        <a href="">
          {forgotPassword}
        </a>
      </Form.Item>

      <Form.Item>
			<Link href='/'>
        <Button type="primary" htmlType="submit" >
        {login}
        </Button>
				</Link>
      </Form.Item>
		</StyledForm>
		</WrapperLogin>
	);
}