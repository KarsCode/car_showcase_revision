import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}


export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps{
    city_mpg: number;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface CarDeatilsProps{
    isOpen: boolean;
    closeModal: ()=>void;
    car:CarProps;
}

export interface filterProps{
    manufacturer:string;
    year: number;
    fuel: string;
    limit: number;
    model: string
}

export interface HomeProps {
    searchParams: filterProps;
  }
  