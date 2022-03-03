import { Page, WrapperForm } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { Typography, Space, Row, Col, Divider, Form, Input, Button } from 'antd';
import { HeaderContent, MenuItem } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { TagOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const {Title} = Typography;
type PageComponent = FC & { layout: typeof MainLayout }

const ArticleGet: PageComponent = () => {
	let { t } = useTranslation()
  const router = useRouter()
  const onFinish = (values: any) => {
    console.log(values)
    const aId = values["article-id"]
    router.push(`/article/${aId}`)
  }
	return (
		<>
			<HeaderContent title={t('Info Article')} />     

        <WrapperForm>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            scrollToFirstError

          >
            <Form.Item
              label={t('common:article-id')}
              name="article-id"
              rules={[{ required: true, message: t('messages:error-message-empty-input') }]}
            >
              <Input style={{height: '50px', marginBottom: '20px'}}/>
            </Form.Item>
            <Button type="primary" block style={{height: '50px'}} htmlType="submit" >Submit</Button>
          </Form>
        </WrapperForm>
		</>
	)
}

ArticleGet.layout = MainLayout

export default ArticleGet