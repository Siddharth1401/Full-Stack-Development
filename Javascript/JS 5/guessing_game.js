// const twitter = {
//     username: "sidzzyz",
//     content: "first post",
//     likes: 150,
//     repost: 5,
//     tags: ["apna college", "delta"]
// };

const max = prompt("Enter max"); 
const num = Math.floor(Math.random()*max + 1);
console.log(num);

let guess = prompt("Whats your guess")

while(true){
    if(guess == "quit"){
        alert("suck my balls")
        break;
    }
    if(guess == num){
        console.log("Right, you da dawg!")
        break;
    }
    else{
        if(guess < num){
            guess = prompt("try bigger nigger")
        }
        else{
            guess = prompt("try smaller")
        }
    }
}