import { Logo, StyledForm, WelcomeText, WrapperLogin, LinkButton } from '@components';
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';


export const ResetPasswordForm = () => {
	const { t } = useTranslation('common');
	const { resetPassword } = useAuth();
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
		resetPassword({
				username: values.username,
				password: values.password,
				comfirm: values.comfirm,
			});
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
            message: errorMessagePassword,
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="comfirm"
        label={comfirmPass}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: errorMessagePassword,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(errorWrongPassword));
            },
          }),
        ]}
      >
        <Input.Password />
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
