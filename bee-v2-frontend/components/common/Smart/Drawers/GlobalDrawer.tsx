import { Button, Drawer, Space} from 'antd';
import { useDrawerState } from 'helpers/context/DrawerContext';
import React, { useContext } from 'react';

import {FC} from 'react'

export interface IGlobalDrawerProps {

}

export const GlobalDrawer: FC<IGlobalDrawerProps> = ({}:IGlobalDrawerProps) => {
	
	const {
		isOpen,
		drawerProps:{
			context,
			title,
			placement,
			content,
			cancelButton,
			confirmButton,
			cancelButtonTitle,
			confirmButtonTitle,
			onClose,
			onCancel,
			onConfirm,
		}
	} = useDrawerState()

		return (
			<Drawer
			onClose={e => onClose(e, context)}
			visible={isOpen}
			title={title}
			placement={placement}
			extra={
				<Space>
					{cancelButton ? <Button onClick={e => onCancel(e, context)}>{cancelButtonTitle} </Button> : null }
					{confirmButton ? <Button onClick={e => onConfirm(e, context)} type="primary">{confirmButtonTitle}  </Button> : null }
					
				</Space>
			}>
			{content}
		</Drawer>

		);
}
