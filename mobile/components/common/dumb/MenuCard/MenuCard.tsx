import { Button } from 'antd';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex
`;

const StyledButton = styled.button`
  width: 140px;
  height: 100px;
  background-color: transparent;
  margin: 10px;
  border-radius: 5px;
  border-color: #c3bfbf; 
`;

export interface IMenuCardProps {
  title: string
  icon: ReactNode,
  path: string
}
const MenuCard: FC<IMenuCardProps> = ({title, icon, path}: IMenuCardProps) => {
  return(
    <ButtonContainer>
      <Link href={path} passHref>
        <StyledButton>
          {icon}
          <div></div>
          {title}
        </StyledButton>
      </Link>
    </ButtonContainer>
  )
} 


MenuCard.displayName = 'MenuCard'

export { MenuCard };