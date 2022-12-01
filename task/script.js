// =============== ODD NUMBER TASK -1 ===========================
// == anonymous function ===
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var result = [];

var odd = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            result.push(arr[i])
        }

    } return result;
}
console.log(odd(arr));

// Arrow function

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var result = [];
var odd = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            result.push(arr[i])
        }

    } return result;
}
console.log(odd(arr))

// =========== SUM NUMBER TASK -2 ==============================
// anonymous function
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = 0;

var output = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    console.log(res);
}
output(array);
//   Arrow Function
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
var res1 =0;
 var sum= ()=>{
   for (var i= 0; i<array1.length; i++){
     res1 += array1[i]
     }
     console.log(res1)
 }
 sum(array1);

//  ============= REMOVE DUPLICATE TASK -3 ========================
// anonymous function
let char = ['A', 'B', 'A', 'B', 'C', 'A'];
var removeDuplicate = function(arr){
    let unique =[... new Set(arr)]
    console.log(unique)
    }
    removeDuplicate(char);

//  Arrow function
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});
console.log(uniqueChars);