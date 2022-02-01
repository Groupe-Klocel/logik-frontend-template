import { Button, Drawer, Space } from 'antd';
import { useDrawerDispatch, useDrawerState } from 'context/DrawerContext';
import React, { useCallback } from 'react';

const DrawerItems = () => {
  const {
    isOpen,
    data,
    title,
    cancelButton,
    comfirmButton,
    cancelButtonTitle,
    comfirmButtonTitle,
    content,
    onComfirm,
    onCancel,
  } = useDrawerState();

  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);


  return (
    <Drawer
      onClose={closeDrawer}
      visible={isOpen}
      title={title}
      placement="right"
      extra={
        <Space>
          {cancelButton ? <Button onClick={onCancel}>{cancelButtonTitle} </Button> : null}
          {comfirmButton ? <Button onClick={onComfirm} type="primary" >{comfirmButtonTitle}  </Button> : null}
        </Space>
      }>
      {content}
    </Drawer>
  );
}

DrawerItems.displayName = 'DrawerItems';

export { DrawerItems};
