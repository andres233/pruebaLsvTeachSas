import {API_KEY} from './config';
export function authHeader() {
    // return {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': API_KEY,
    // };
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': API_KEY,
    };
}


