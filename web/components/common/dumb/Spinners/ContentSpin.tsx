import { Spin } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

const StyledSpinWrapper = styled.div`
    display: flex;
    justify-content: center; // centers in the flex direction and the default flex-direction is row
    align-items: center; // centers perpendicular to the flex direction
    height: 60vh;
`;

const ContentSpin: FC = () => {
    return (
        <StyledSpinWrapper>
            <Spin />
        </StyledSpinWrapper>
    );
};

ContentSpin.displayName = 'ContentSpin';

export { ContentSpin };
