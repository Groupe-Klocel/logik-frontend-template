import { Button } from 'antd';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

export interface ILinkButtonProps {
    title?: string;
    replace?: boolean;
    path:
        | string
        | {
              pathname: string;
              query: any;
          };
    type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
    icon?: ReactNode;
}

const LinkButton: FC<ILinkButtonProps> = ({
    title,
    path,
    type,
    icon,
    replace
}: ILinkButtonProps) => {
    return (
        <Link href={path} passHref replace={replace}>
            <Button icon={icon} type={type}>
                {title}
            </Button>
        </Link>
    );
};

LinkButton.displayName = 'LinkButton';
LinkButton.defaultProps = {
    replace: false
};
export { LinkButton };
