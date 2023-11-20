//Qs1.Squareandsumthearrayelementsusingthearrowfunctionandthenfindtheaverageofthearray.

// arr = [1, 2, 3, 4, 5];

// function avgSum(...arr) {
//     sum = arr.reduce((sum, el) => sum + el);
//     return sum/arr.length;
// };

// console.log(avgSum(...arr));

// Qs2.Createanewarrayusingthemapfunctionwhoseeachelementisequaltotheoriginalelementplus5

// arr = [1, 2, 3, 4, 5];
// function newArr(){
//     return arr.map(el => el + 5);
// };

// console.log(newArr());

// Qs3.Createanewarraywhoseelementsareinuppercaseofwordspresentintheoriginalarray

// arr = ["i am going to Monaco", "I will be a billionaire"];

// function cap(){
//     return arr.map(arr => arr.toUpperCase());
// }

// console.log(cap());

// let strings=["adam","bob","catlyn","donald","eve"];
// console.log(strings.map((string)=>string.toUpperCase()));

// Qs4.WriteafunctioncalleddoubleAndReturnArgswhichacceptsanarrayandavariablenumberofarguments.Thefunctionshouldreturnanewarraywiththeoriginalarrayvaluesandalloftheadditionalargumentsdoubled.

// arr = [1, 2, 3, 4, 5];
// function doubleAndReturnArgs(arr, ...args){
//     return arr.map(el => el) + "," + args.map((arg) => arg*2);
// };

// console.log(doubleAndReturnArgs(arr, 1, 2, 3));

// Qs5.WriteafunctioncalledmergeObjectsthatacceptstwoobjectsandreturnsanewobjectwhichcontainsallthekeysandvaluesofthefirstobjectandsecondobject.

// const obj1 = {
//     username: "hi",
//     password: "yo"
// }
// const obj2 = {
//     user: "chi",
//     pass: "cho"
// }

// const mergeObjects = (obj1, obj2) => [{...obj1, ...obj2}];


// console.log(mergeObjects(obj1, obj2));