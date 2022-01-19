import { Button, Drawer, Space } from 'antd';
import { ArticlesSearch } from 'components/common/Dumb/DrawerItems/ArticlesSearch';
import { TableFilter } from 'components/common/Dumb/DrawerItems/TableFilter';
import { UserSettings } from 'components/common/Dumb/DrawerItems/UserSettings';
import { useDrawerDispatch, useDrawerState } from 'helpers/context/DrawerContext';
import React, { useCallback } from 'react';


/** Drawer Components */



/** Components Name Constants */
const DRAWER_COMPONENTS = {
  ARTICLES_SEARCH: ArticlesSearch,
  TABLE_FILTER: TableFilter,
  USER_SETTINGS: UserSettings,
};



export const DrawerItems = () => {

  const { 
    isOpen,
    drawerComponent, 
    data, 
    title, 
    placement, 
    cancelButton, 
    confirmButton, 
    cancelButtonTitle, 
    confirmButtonTitle 
  } = useDrawerState();

  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);

  const onCancel = useCallback(() => dispatch({ type: 'ON_CANCEL' }), [
    dispatch,
  ]);

  const onComfirm = useCallback(() => dispatch({ type: 'ON_COMFIRM' }), [
    dispatch,
  ]);

  if (!drawerComponent) {
    return null;
  }
  const SpecificContent = DRAWER_COMPONENTS[drawerComponent];

  return (
    <Drawer
      onClose={closeDrawer}
      visible={isOpen}
      title={title}
      placement={placement}
      extra={
        <Space>
          {cancelButton ? <Button onClick={onCancel}>{cancelButtonTitle} </Button> : null}
          {confirmButton ? <Button onClick={onComfirm} type="primary">{confirmButtonTitle}  </Button> : null}

        </Space>
      }>
      <SpecificContent onClose={closeDrawer} data={data} />
    </Drawer>
  );
}
