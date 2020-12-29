export function postNewTrainer(firstName,lastName,date,location,email,password,number,specificCategories,image,allCategories){
    var sports=[];
    var result=[];
    for (var key of Object.keys(specificCategories)) {
        if(specificCategories[key] === true){
            sports.push(key);
        }
    }
    allCategories.forEach(function (item, index) {
        if(sports.includes(item.name)){
            result.push(item);
        }
      });
    let trainer={"name":firstName+lastName,"dateOfBirth":date,"location":location,
        "email":email,"password":password, "image":image,"categories":result
    };
    console.log(trainer);
    return trainer;
}