const obj1={
    name:'vishnu',
    interests:['cricket','football']
}

const obj2={
    name:'sachin',
    interests:['cricket','movies','football']
}

function arrayCheck(){
    const arr1=obj1.interests;
    const arr2=obj2.interests;
    if(arr1.length===arr2.length){
        let a=0;
        for(i=0;i<arr1.length;i++){
            for(let j=0;j<arr1.length;j++){
                if(arr1[i]===arr2[j]){
                    a++;
                }
            }
        }
        if(a===arr1.length){
            return("same elements")
        }
        else{
            return("different elements")
        }
    }
    else{
        return("different elements")
    }
}

console.log(arrayCheck())