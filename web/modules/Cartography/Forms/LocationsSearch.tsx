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
                <Form.Item initialValue={true} name="replenish">
                    <Checkbox>{t('d:replenish')}</Checkbox>
                </Form.Item>
            </Form>
        </>
    );
};

LocationsSearch.displayName = 'LocationsSearch';

export { LocationsSearch };
