import { IUser } from './types'

export function addNewUser( user: IUser ){
    return {
        type: 'ADD_USER',
        payload: {
            user
        }
    }
}