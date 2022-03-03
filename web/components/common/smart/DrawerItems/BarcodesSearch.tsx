import { Button, Form, Input, Select, Space } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IBarcodesSearchProps {
    form: any;
}

const BarcodesSearch: FC<IBarcodesSearchProps> = ({ form }: IBarcodesSearchProps) => {
    let { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="flagDouble" label={t('d:flagDouble')}>
                    <Input />
                </Form.Item>
                <Form.Item name="articleId" label={t('d:articleId')}>
                    <Input />
                </Form.Item>
                <Form.Item name="rotation" label={t('d:rotation')}>
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};

BarcodesSearch.displayName = 'BarcodesSearch';

export { BarcodesSearch };
