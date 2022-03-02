import styled from 'styled-components';
import { Layout, Input } from 'antd';

const WrapperForm = styled.div`
    padding: 20px;
    max-height: 30vh;
`;
const WrapperStepContent = styled.div`
    margin: 40px auto;
`;
const WrapperStickyActions = styled.div`
    position: absolute;
    right: 0;
    margin-right: 15px;
    align-self: flex-end;
`;

const InputWrapper = styled(Input)`
    background-color: white;
    color: black;
`;

const WrapperLogin = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 3%;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    flex-direction: column;
    width: 95vw;
    @media only screen and (max-width: 320px) {
        width: 90vw;
        hr {
            margin-bottom: 0.3rem;
        }
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 360px) {
        width: 90vw;
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 411px) {
        width: 80vw;
    }

    @media only screen and (min-width: 768px) {
        width: 80vw;
    }
    @media only screen and (min-width: 1024px) {
        width: 70vw;
    }
    @media only screen and (min-width: 1280px) {
        width: 30vw;
    }
`;

const PageContentWrapper = styled.div`
    margin: 15px 30px;
`;
const PageTableContentWrapper = styled(Layout.Content)`
    margin: 15px 40px 15px 15px;
`;
export {
    PageContentWrapper,
    PageTableContentWrapper,
    WrapperLogin,
    WrapperForm,
    WrapperStepContent,
    WrapperStickyActions,
    InputWrapper
};
