import { Button } from 'antd';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

export interface ILinkButtonProps {
    title?: string;
    path:
        | string
        | {
              pathname: string;
              query: unknown;
          };
    type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
    icon?: ReactNode;
}

const LinkButton: FC<ILinkButtonProps> = ({ title, path, type, icon }: ILinkButtonProps) => {
    return (
        <Link href={path}>
            <Button icon={icon} type={type}>
                {title}
            </Button>
        </Link>
    );
};

LinkButton.displayName = 'LinkButton';

export { LinkButton };
