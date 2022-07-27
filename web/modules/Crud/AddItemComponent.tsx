import { Layout } from 'antd';

import { FC } from 'react';
import styled from 'styled-components';
import { AddItemForm } from './submodules/AddItemForm';
import { FilterColumnType, ModelType } from 'models/Models';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditItemProps {
    headerComponent: any;
    dataModel: ModelType;
    addSteps: Array<Array<FilterColumnType>>;
    routeAfterSuccess: string;
}

const AddItemComponent: FC<IEditItemProps> = (props: IEditItemProps) => {
    return (
        <>
            <StyledPageContent>
                {props.headerComponent}
                <AddItemForm
                    addSteps={props.addSteps}
                    dataModel={props.dataModel}
                    routeAfterSuccess={props.routeAfterSuccess}
                />
            </StyledPageContent>
        </>
    );
};

AddItemComponent.displayName = 'AddItemComponent';

export { AddItemComponent };
