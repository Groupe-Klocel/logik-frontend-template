import { Checkbox, Form, Input } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export type CarriersSearchTypeProps = {
    form: any;
};

const CarriersSearch: FC<CarriersSearchTypeProps> = ({ form }: CarriersSearchTypeProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="code" label={t('d:code')}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label={t('d:status')}>
                    <Input />
                </Form.Item>
                <Form.Item name="available" valuePropName="checked" initialValue={false}>
                    <Checkbox>{t('d:available')}</Checkbox>
                </Form.Item>
            </Form>
        </>
    );
};

CarriersSearch.displayName = 'CarriersSearch';

export { CarriersSearch };
