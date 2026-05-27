import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
        label: string;
        children?: ReactNode;
}

export default function CustomButton({ label, children, className = "", ...props }: ButtonProps) {
        return (
                <button className={`rounded-xl active:bg-gray-800 ${className}`} {...props}>
                        {label}
                        {children}
                </button >
        );
}