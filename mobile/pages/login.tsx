import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { FC } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { LoginForm } from '../modules/Auth/LoginForm';

type PageComponent = FC & { layout: typeof AuthLayout };

const LoginPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <LoginForm />
        </>
    );
};

LoginPage.layout = AuthLayout;

export default LoginPage;
