import { FC } from 'react';
import './Button.scss';

interface Props {
    label: string;
}

const Button: FC<Props> = ({ label }) => {
    return (
        <button>{label}</button>
    );
};

export default Button;