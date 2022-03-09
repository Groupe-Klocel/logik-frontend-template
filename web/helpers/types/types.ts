import { ReactNode } from 'react';

export type LanguageType = {
    name: string;
    code: string;
};

export type MyColumnType = {
    key: React.Key;
    title: string;
    dataIndex?: string;
    disabled?: boolean;
    fixed?: boolean | string;
    render?: unknown;
};

export type ProfileMenuType = {
    key: string;
    title: string;
    path?: string;
    icon?: ReactNode;
    onClick?: unknown;
};

export type BreadcrumbType = {
    path?: string;
    breadcrumbName: string;
};

export type GroupType = {
    id: string;
    name: string;
};

export type DrawerType = {
    context: unknown;
    title: string;
    cancelButton: boolean;
    comfirmButton: boolean;
    cancelButtonTitle: string;
    comfirmButtonTitle: string;
    placement: 'top' | 'right' | 'bottom' | 'left' | undefined;
    content?: ReactNode;
    onComfirm?: Function;
    onCancel?: Function;
    onClose?: Function;
};

export type PaginationType = {
    total: number | undefined;
    current: number;
    itemsPerPage: number;
};

export type DataQueryType = {
    count: number;
    itemsPerPage: number;
    results: Array<unknown>;
    totalPages: number;
};
export type DataFilterType = {
    key: React.Key;
    disabled: boolean;
    title: string;
};

export type OnlyChildrenType = {
    children: ReactNode;
};

export type RequireKeys<T, TNames extends keyof T> = T & {
    [P in keyof T]-?: P extends TNames ? T[P] : never;
};
