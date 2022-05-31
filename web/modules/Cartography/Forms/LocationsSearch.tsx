import { Form, Input, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const { Option } = Select;

export type LocationsSearchProps = {
    form: any;
};

const LocationsSearch: FC<LocationsSearchProps> = ({ form }: LocationsSearchProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="block" label={t('d:block')}>
                    <Input />
                </Form.Item>
                <Form.Item name="aisle" label={t('d:aisle')}>
                    <Input />
                </Form.Item>
                <Form.Item name="column" label={t('common:column')}>
                    <Input />
                </Form.Item>
                <Form.Item name="level" label={t('d:level')}>
                    <Input />
                </Form.Item>
                <Form.Item name="position" label={t('d:position')}>
                    <Input />
                </Form.Item>
                <Form.Item name="replenish" label={t('d:replenish')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item label={t('d:constraint')} name="constraint">
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};

LocationsSearch.displayName = 'LocationsSearch';

export { LocationsSearch };
