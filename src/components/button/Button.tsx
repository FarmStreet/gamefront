import React, {FC} from "react";
import './Button.scss';

interface ButtonProps {
    children: React.ReactNode;
    type?: ButtonTypes;
    onClick?: () => void;
}

export enum ButtonTypes {
    Green,
    Red
}

const Button: FC<ButtonProps> = ({children, type = ButtonTypes.Green, onClick = () => {}}) => {

    return (
        <div onClick={onClick} className={"button" + (type === ButtonTypes.Red ? " button__red" : "")}><div>{children}</div></div>
    )
}

export default Button