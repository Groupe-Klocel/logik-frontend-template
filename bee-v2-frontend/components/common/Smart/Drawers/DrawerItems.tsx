import { Button, Drawer, Space } from 'antd';
import { ArticlesSearch } from 'components/common/Dumb/DrawerItems/ArticlesSearch';
import { TableFilter } from 'components/common/Dumb/DrawerItems/TableFilter';
import { UserSettings } from 'components/common/Dumb/DrawerItems/UserSettings';
import { useDrawerDispatch, useDrawerState } from 'helpers/context/DrawerContext';
import React, { useCallback } from 'react';


/** Drawer Components */



export const DrawerItems = () => {

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
          {comfirmButton ? <Button onClick={onComfirm} type="primary">{comfirmButtonTitle}  </Button> : null}

        </Space>
      }>
      {content}
    </Drawer>
  );
}
