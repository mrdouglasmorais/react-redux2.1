export interface IUser{
    id?: number;
    name: string;
    email: string;
    age: string;
}

export interface IGlobalState{
    users: IUser[]
}