const currency = "usd";
const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

fetch(URL)
  .then((response) => {
    return response.json(); // Call the json method to parse the response
  })
  .then((data) => {
    console.log(`JSON Response: ${JSON.stringify(data)}`);
  })
