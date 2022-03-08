import { FC } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { ForgotPasswordForm } from '../modules/Auth/ForgotPasswordForm';

type PageComponent = FC & { layout: typeof AuthLayout };

const ForgotPasswordPage: PageComponent = () => {
    return (
        <>
            <ForgotPasswordForm />
        </>
    );
};

ForgotPasswordPage.layout = AuthLayout;

export default ForgotPasswordPage;
