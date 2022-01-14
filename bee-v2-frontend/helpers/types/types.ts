
import { ReactNode } from 'react'

export type LanguageType = {
	name: string;
	code: string;
}

export type ColumnType = {
	key: React.Key;
	title: string,
	dataIndex: string,
  disabled?: boolean;
  fixed?: boolean;
	render?: ReactNode
}

export type ProfileMenuType = {
	key: string;
	title: string;
	path?: string;
	icon?: ReactNode;
	onClick: Function;
}


export type BreadcrumbType = {
	path?: string;
	breadcrumbName: string;
}

export type GroupType = {
	id: string;
	name: string;
}

export type DrawerType = {
	context: any;
	title: string;
	cancelButton: boolean;
	confirmButton : boolean;
	cancelButtonTitle: string;
	confirmButtonTitle : string;
	placement: "top" | "right" | "bottom" | "left" | undefined;
	content?: ReactNode;
	onConfirm?: Function;
	onCancel?: Function;
	onClose?: Function;
}

export type DataFilterType = {
  key: React.Key;
  disabled: boolean;
  title: string;
}
