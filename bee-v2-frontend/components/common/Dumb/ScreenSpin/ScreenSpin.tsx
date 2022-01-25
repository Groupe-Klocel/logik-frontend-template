import { Spin } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

const StyledSpinWrapper = styled.div`
display: flex;
justify-content:center; // centers in the flex direction and the default flex-direction is row
align-items:center; // centers perpendicular to the flex direction
height: 100vh; 
width: 100vw; 
position: absolute; // so it goes behind the current content
`;

export const ScreenSpin: FC = () => {
	return (
		<StyledSpinWrapper>
			<Spin />
		</StyledSpinWrapper>
	)
}