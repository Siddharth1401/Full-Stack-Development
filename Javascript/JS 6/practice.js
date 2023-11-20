// function goo(khao, mat){
//     console.log(`${khao} + ${mat}`)
// };

// goo("goo khao mote");

// function nNumbers(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(nNumbers(9));

// function concatStrings(arr){
//     let string = "";
//     for(i=0; i<arr.length; i++){
//         string = string + arr[i];
//     }
//     return string;
// }

// console.log(concatStrings(["s", "u", "pp"]));

// WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber.

// function largestNumbers(arr, l){
//     for(i = 0; i<arr.length; i++){
//         if(arr[i]>l){
//             console.log(arr[i]);
//         }
//     }
// }

// largestNumbers([1, 2, 3, 4, 5], 3);

// Qs2.WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.

// // str = "abcc";
// function uniqueString(str){
//     uni = "";
//     for(i = 0; i<str.length; i++){
//         let currChar = str[i];
//         if(uni.indexOf(currChar) == -1){
//             uni += currChar;
//         }
//     }
//     return uni;
// }

// console.log(uniqueString("abccfhdhdhddd"));

// Qs3.WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput


// let country = ["norway", "switzerland", "sweden", "finland", "australia"]

// function longestCountry(country){
//     let largest = "";
//     for(i = 0; i < country.length; i++){
//         if(country[i].length > largest.length){
//             largest = country[i];
//         }
//     }
//     return largest;
// }

// console.log(longestCountry(country));

// Qs4.WriteaJavaScriptfunctiontocountthenumberofvowelsinaStringargument

// const str = "bitch please";
// function countVowels(str){
//     let vow = 0;
//     for(i = 0; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             vow++;
//         }
//     }
//     return vow;
// };

// console.log(countVowels(str));

// Qs5.WriteaJavaScriptfunctiontogeneratearandomnumberwithinarange(start,end).

// function randNum(start, end){
//     const num = Math.floor(Math.random()*end + start);
//     return num;
// };

// console.log(randNum(1, 10));

