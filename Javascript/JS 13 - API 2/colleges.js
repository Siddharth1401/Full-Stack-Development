// Define the API endpoint URL for university search
let url = "http://universities.hipolabs.com/search?name=";

// Get reference to the button element
let btn = document.querySelector("button");

// Add click event listener to the button
btn.addEventListener("click", async () => {
    // Get the value entered in the input field (assumed to be a country name)
    let country = document.querySelector("input").value;
    console.log(country);

    // Call the getColleges function to fetch and display colleges based on the country
    let colArr = await getColleges(country);
    show(colArr);
});

// Function to display a list of colors
function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
  
    for (col of colArr) {
      console.log(col.name);
  
      let li = document.createElement("li");
      li.innerText = col.name;
      list.appendChild(li);
    }
}

// Asynchronous function to fetch college data based on the provided country
async function getColleges(country) {
    try {
        // Make an asynchronous request to the API using axios
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        // Handle errors by logging them and returning an empty array
        console.log("error: ", e);
        return [];
    }
}
