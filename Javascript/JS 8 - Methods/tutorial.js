// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);
// });

// arr.forEach(function (el){
//     console.log(el);
// })

// let arr = [{
//     name: "sid",
//     CTC: "$1M"
// }, {
//     name: "shik",
//     CTC: "$2M"
// }, {
//     name: "pa",
//     CTC: "$3M"
// }]

// arr.forEach((student) => {
//     console.log(student.CTC);
// });

//max number of array
// let arr = [1, 2, 3, 4, 5];

// let max = arr.reduce((max, el) => {
//     if(max < el){
//         return el;
//     } else{
//         return max;
//     }
// });

// console.log(max);

//multiple of 10

// let arr = [10, 20, 30, 40, 50];
// const multiple = arr.every(ele => ele % 10 == 0);
// console.log(multiple);

//min number of array using function
// let arr = [1, 2, 3, 4, 5];

// function miniarray(array){
//     const mini = arr.reduce( (min, ele) => {
//         if(ele < min){
//             return ele;
//         }
//         else{
//             return min;
//         }
//     });
//     return mini;
// }
// console.log(miniarray(arr));

//spread
// let odd = [1, 3, 5, 7, 9]; 
// let even = [2, 4, 6, 8, 10]; 
// let nums = [...odd, ...even]; // // array literals

// console.log(nums);

// object literals
// const data = {
//     name: "siddharth",
//     email: "rambo1401@gmail.com",

// };

// const dataCopy = {...data, id: 1};

// console.log(dataCopy);

// Rest 
// function sum(...args){
//     return args.reduce((sum, el) => sum + el);
// }

// console.log(sum(1, 2, 4, 5, 6));

// Destructuring
//array
// let names = ["lambo", "r8", "bugatti"];

// let [firCar, secCar] = names;

// object literals

// const names = {
//     username: "hi",
//     password: "yo"
// }
// let { username: user, password: secret, city: place = "Paris" } = names;