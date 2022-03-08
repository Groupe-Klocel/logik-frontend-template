import { FC } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { ResetPasswordForm } from '../modules/Auth/ResetPasswordForm';

type PageComponent = FC & { layout: typeof AuthLayout };

const ResetPasswordPage: PageComponent = () => {
    return (
        <>
            <ResetPasswordForm />
        </>
    );
};

ResetPasswordPage.layout = AuthLayout;

export default ResetPasswordPage;
