import { Button } from 'antd';
import { FC } from 'react';

export interface IDrawerButtonProps {
    title?: string;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const DrawerButton: FC<IDrawerButtonProps> = ({
    title,
    icon,
    onClick,
    ...props
}: IDrawerButtonProps) => {
    return (
        <Button icon={icon} onClick={onClick} {...props}>
            {title}
        </Button>
    );
};

DrawerButton.displayName = 'DrawerButton';

export { DrawerButton };
