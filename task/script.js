
// ====== anonymous function =======

var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
var result= [];

var odd = function (arr){
 for (var i=0; i<arr.length; i++){
    if (arr[i]%2!=0){
        result.push(arr[i])
    }
    
 }return result;
}
console.log(odd(arr));

// Arrow function

var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
var result= [];
var odd = (arr)=>{
    for (var i=0; i<arr.length; i++){
        if (arr[i]%2!=0){
            result.push(arr[i])
        }
        
     }return result;
    }
    console.log(odd(arr))
