// const h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("yellow", 1000, () => {
//       changeColor("green", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
//callbacks nesting callback hell

//promise chain
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
  
//     if (internetSpeed > 4) {
//       success();
//     } else {
//       failure();
//     }
//   }
// //calling the func
//   savetoDb(
//     "apna college",
//     () => {
//       console.log("Your data was saved.");
//     },
//     () => {
//       console.log("Weak connection. Data not saved.");
//     }
//   );
  
//Promises - resolve and reject
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed>4){
//             resolve("saved");
//         } else{
//             reject("weak connection");
//         }
//     });
//   }

//then and catch
savetoDb("go to Swit")
    .then(() => {
        console.log("Promise was resolved");
    })
    .catch(() => {
        console.log("Promise was rejected");
    });


// promise chaining
savetoDb("apna college")
  .then(() => {
    console.log("data1 saved");
    return savetoDb("helloworld");
  })
  .then(() => {
    console.log("data2 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
