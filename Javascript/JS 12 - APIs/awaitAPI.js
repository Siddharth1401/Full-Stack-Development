// Define the URL for fetching cat facts
let url = "https://catfact.ninja/fact";

// Define an asynchronous function to get cat facts
async function getFacts() {
  try {
    // Fetch data from the URL
    let res = await fetch(url);
    // Convert the response to JSON format
    let data = await res.json();
    // Log the first set of cat facts to the console
    console.log(data.fact);

    // Make another fetch request to the same URL
    let res2 = await fetch(url);
    // Convert the response to JSON format
    let data2 = await res2.json();
    // Log the second set of cat facts to the console
    console.log(data2.fact);
  } catch (e) {
    // Log an error message if any error occurs during the fetch requests
    console.log("error -", e);
  }

  // Log a farewell message
  console.log("bye");
}

// Call the function to initiate the fetching of cat facts
getFacts();
