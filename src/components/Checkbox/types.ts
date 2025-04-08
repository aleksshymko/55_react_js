import { ChangeEvent } from "react";

export interface CheckboxProps {
    id?: string;
    name: string;
    label?: string;
    error?: string;
    //type?: 'checkbox';
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}