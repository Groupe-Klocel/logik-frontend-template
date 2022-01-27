import { AppHead } from '@components'
import { FC } from 'react'
import AuthLayout from '../components/layouts/AuthLayout'
import { LoginForm } from '../modules/Auth/LoginForm'

type PageComponent = FC & { layout: typeof AuthLayout }

const LoginPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<LoginForm />
		</>
	)
}

LoginPage.layout = AuthLayout

export default LoginPage