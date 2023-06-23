import React from 'react';
import './Button.scss';

interface Props {
    label: string;
}

const Button: React.FC<Props> = ({ label }) => {
    return (
        <button>{label}</button>
    );
};

export default Button;