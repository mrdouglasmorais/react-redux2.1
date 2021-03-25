export interface IUser{
    id: number;
    name: string;
    email: string;
    age: number;
}

export interface IGlobalState{
    users: IUser[]
}