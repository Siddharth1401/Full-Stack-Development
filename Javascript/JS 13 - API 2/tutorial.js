// Select the button element
let btn = document.querySelector("button");

// Add a click event listener to the button
btn.addEventListener("click", async () => {
  // Call the getFacts function asynchronously
  let fact = await getFacts();

  // Log the retrieved fact to the console
  console.log(fact);

  // Update the content of the element with id "result" with the fetched fact
  let p = document.querySelector("#result");
  p.innerText = fact;
});

// Define the API URL for fetching cat facts
let url = "https://catfact.ninja/fact";

// Define an asynchronous function to fetch cat facts using axios
async function getFacts() {
  try {
    // Make a GET request to the specified URL
    let res = await axios.get(url);

    // Return the retrieved fact from the response data
    return res.data.fact;
  } catch (e) {
    // Log an error message to the console if an error occurs during the request
    console.log("error - ", e);

    // Return a default message if no fact is found
    return "No fact found";
  }
}
