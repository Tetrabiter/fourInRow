import clsx from "clsx";
import type { MouseEventHandler } from "react";

interface ButtonBaseInf {
    children: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'submit' | 'reset' | 'button';
    name?: string;
    disabled?: boolean;
}

const ButtonBase : React.FC<ButtonBaseInf> = ({children , className , onClick , type , name , disabled}) =>{
    return(
        <button 
            className={clsx(className)}
            onClick={onClick}
            name={name}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default ButtonBase;