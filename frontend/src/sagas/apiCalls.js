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
