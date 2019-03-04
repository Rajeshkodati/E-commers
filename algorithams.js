function displayEven(arr){
    //const result = arr.filter(x =>{
       /*  if(x %2 ===0){
            return true;
        }
        else{
            return false;
        }
    });
    return result; */
    const result = [];
    for(let i=0; i<arr.length; i++){
        if (arr[i]%2 === 0){
            result.push(arr[i]);
        }
    }
    return result;
}
function displayOdd(arr){
    // const result =[];
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i] % 2 === 1){
    //        result.push(arr[i]);
    //     }

    // }
    return arr.filter(x => x %2 ===1 );
}
displayEven([1,2,3,4,5,6,7])