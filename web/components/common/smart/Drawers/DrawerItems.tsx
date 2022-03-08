import { Button, Drawer, Space } from 'antd';
import { useDrawerDispatch, useDrawerState } from 'context/DrawerContext';
import React, { useCallback } from 'react';
import useTranslation from 'next-translate/useTranslation';

const DrawerItems = () => {
    const {
        size,
        isOpen,
        title,
        cancelButton,
        comfirmButton,
        cancelButtonTitle,
        comfirmButtonTitle,
        content,
        onComfirm,
        onCancel
    } = useDrawerState();

    const dispatch = useDrawerDispatch();
    const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [dispatch]);

    const { t } = useTranslation();

    return (
        <Drawer
            onClose={closeDrawer}
            visible={isOpen}
            title={t(title)}
            width={size}
            placement="right"
            extra={
                <Space>
                    {cancelButton ? (
                        <Button onClick={onCancel}>{t(cancelButtonTitle)} </Button>
                    ) : null}
                    {comfirmButton ? (
                        <Button onClick={onComfirm} type="primary">
                            {t(comfirmButtonTitle)}{' '}
                        </Button>
                    ) : null}
                </Space>
            }
        >
            {content}
        </Drawer>
    );
};

DrawerItems.displayName = 'DrawerItems';

export { DrawerItems };
