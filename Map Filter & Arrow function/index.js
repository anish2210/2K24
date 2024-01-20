const arr = [1, 2, 3, 4, 5, 6];

const newArr = [];

// function transform(arr){
// }
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);