import { Checkbox, Form, Input } from "antd"
import useTranslation from "next-translate/useTranslation";

const StockStatusForm = () => {
    const { t } = useTranslation('common');
    
    return(
        <>
            <Form.Item
                label={t('name')}
                name="value"
                rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={t('code')}
                name="code"
                rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                label={t('d:system')}
                name="system"
            >
                <Checkbox/>
            </Form.Item>
            {/* <Form.Item label={t('comment')} name="comment">
                <Input />
            </Form.Item> */}
        </>
    )
}

export { StockStatusForm };