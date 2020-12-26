export function getTrainersApi(){
    return fetch('http://localhost:8085/api/v1/trainers',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}