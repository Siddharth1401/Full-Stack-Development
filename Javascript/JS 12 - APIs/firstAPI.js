//First API
// Define the URL for fetching cat facts
let url = "https://catfact.ninja/fact";

// Fetch data from the URL
fetch(url)
  .then((res) => {
    // Convert the response to JSON format
    return res.json();
  })
  .then((data) => {
    // Log the first set of data to the console
    console.log("data1 =", data.fact);
    // Make another fetch request to the same URL
    return fetch(url);
  })
  .then((res) => {
    // Convert the response to JSON format
    return res.json();
  })
  .then((data2) => {
    // Log the second set of data to the console
    console.log("data2 =", data2.fact);
  })
  .catch((err) => {
    // Log an error message if any error occurs during the fetch requests
    console.log("ERROR -", err);
  });


  