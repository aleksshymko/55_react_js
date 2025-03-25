/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
let city: any = 'Berlin';
city = ['Paris', 1234]

interface User{
    name: string,
    age?: number | string
}

const userData: User = {
    name: 'Tom',
    age: '20'
}

interface User {
    isAdmin?: boolean
}

interface Admin extends User {
    email: string,
    tel: string
}

const personData: Admin = {
    name: 'Bob',
    email: 'asd@gmail.com',
    tel: '123445'
}

const newUser: User = {
    name: 'John'
}

type Weight = string | number | null;
let userWeight: Weight = 52;
let animalWeight: Weight = null;

type Status = 'success'|'error'|'loading';
let requestStatus: Status = 'success';
requestStatus = 'loading'

type Animal = {
    name: string,
    weight?: number 

}

const animalData: Animal = {
    name: 'Lion',
    weight: 200
}

type NewAnimal = Animal & {country: string};
const zebra: NewAnimal = {
    name: 'Zebra',
    country: 'Africa'
}

const dog: Animal = {
    name: 'Dog',
    //country: 'Germany'
}

type CustomArrayType<T=null> = (string|T)[];
const arrayMix1: CustomArrayType<number> = ['red', 123, 'black'];
const arrayMix2: CustomArrayType<number[]> = ['red', [1,2,3], 'black'];
const arrayMix3: CustomArrayType = ['red', null, 'black'];

interface Fruit<T=number> {
    title: string,
    address: T
}

const fruitObj: Fruit<string>={
    title: 'Grape',
    address: 'london, str...'
}

enum Colors {Red, Black, Green};

export enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN ='green'
}

export const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
        case TRAFFIC_LIGHT.RED : 
        return 'Stop!';
        case TRAFFIC_LIGHT.YELLOW : 
        return 'Prepare to go';
        case TRAFFIC_LIGHT.GREEN : 
        return 'Go!';
    }
}
 
console.log(getAction(TRAFFIC_LIGHT.RED));