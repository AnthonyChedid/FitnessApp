import axios from 'axios';

export function getTrainersApi(){
    return fetch('http://localhost:8085/api/v1/trainers',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getByNameApi(name){
    return fetch("http://localhost:8085/api/v1/trainers-by-name?name="+name,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getByTypeApi(type){
    return fetch("http://localhost:8085/api/v1/trainers-by-type?type="+type,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getByNameTypeApi(name,type){
    return fetch("http://localhost:8085/api/v1/trainers-by-name_type?name="+name+"&type="+type,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getCategoriesApi(){
    return fetch('http://localhost:8085/api/v1/categories',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}


export function postTrainer(trainer) {
    try {
        console.log("inside api call : ",trainer);
        return axios.post("http://localhost:8085/api/v1/addtrainer",trainer)
    }
    catch(e) {
        console.log('error');
      console.log(e);
    }
}

  export function getCategoriesByNameApi(name){
    return fetch("http://localhost:8085/api/v1/categoriesbyname?name="+name,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})
}

export function postUser(user) {
    try {
        return axios.post("http://localhost:8085/api/v1/adduser",user)
    }
    catch(e) {
      console.log(e);
    }
}

export function getUsersApi(){
    return fetch('http://localhost:8085/api/v1/users',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getSessionsApi(email){
    console.log("email inside api call ,",email);
    return fetch("http://localhost:8085/api/v1/sessions?email="+email,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})
}

export function postSession(session) {
    try {
        console.log("entering post");
        return axios.post("http://localhost:8085/api/v1/newsession",session)
    }
    catch(e) {
      console.log(e);
    }
}

export function getUserByEmailApi(email){
    return fetch("http://localhost:8085/api/v1/userbyemail?email="+email,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})
}