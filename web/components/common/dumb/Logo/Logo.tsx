import { FC } from 'react';
import Icon from '@ant-design/icons';

export interface ILogoProps {
    width: number;
}

const Logo: FC<ILogoProps> = ({ width }: ILogoProps) => {
    return <Icon component={() => <img src="/bee-logo.svg" width={width} />} />;
};

Logo.displayName = 'Logo';

export { Logo };
