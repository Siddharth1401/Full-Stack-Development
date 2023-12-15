// Function that returns a Promise with a random number after a timeout
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Generate a random number between 1 and 10
            let num = Math.floor(Math.random() * 10 + 1);
            
            // Log the random number
            console.log(num);
            
            // Resolve the Promise
            resolve();
        }, 1000);
    });
}

// Async function to print random numbers using the getNum function
async function printNum() {
    try {
        // Wait for the getNum function to resolve, then repeat four times
        await getNum();
        await getNum();
        await getNum();
        await getNum();
    } catch (err) {
        // Handle errors if they occur
        console.log("An error has occurred");
        console.log(err);
    }

    // Log a message after all promises are resolved
    console.log("Don't wonk your willy, Willy Wonka");
}


