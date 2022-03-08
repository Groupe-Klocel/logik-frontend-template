import { FC } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { ForgotPasswordForm } from 'modules/Auth/ForgotPasswordForm';


type PageComponent = FC & { layout: typeof AuthLayout };

const LoginPage: PageComponent = () => {
    return (
        <>
            <ForgotPasswordForm />
        </>
    );
};

LoginPage.layout = AuthLayout;

export default LoginPage;
