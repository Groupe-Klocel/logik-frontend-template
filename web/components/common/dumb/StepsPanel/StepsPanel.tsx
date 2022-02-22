import { FC } from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

interface IStepsPanelProps {
    steps: any;
    currentStep: number;
}

const StepsPanel: FC<IStepsPanelProps> = ({ steps, currentStep }: IStepsPanelProps) => {
    return (
        <Steps current={currentStep}>
            {steps.map((step: any) => (
                <Step key={step.key} title={step.title} />
            ))}
        </Steps>
    );
};

StepsPanel.displayName = 'StepsPanel';

export { StepsPanel };
