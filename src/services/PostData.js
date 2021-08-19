import { authHeader } from './authHeader';
import {AMBIENT} from './config';

export function PostData(metodo,type,Data){    
    let baseUrl = `${AMBIENT}/api/`;
    return new Promise((resolve, reject) =>{

        fetch(baseUrl+metodo,{
            method: type,
            headers: authHeader(),
            body: JSON.stringify(Data)
          })
        .then((response)=>response.json())
        .then((responseJson)=>{
           resolve(responseJson);
        })
        .catch((error)=>{
            reject(error);
        })

    })
}
