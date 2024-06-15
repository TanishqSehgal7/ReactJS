import { useEffect, useState } from "react";

function useCurrencyInfoFromApi(currency) {

    const [data, setData] = useState({})
    console.log(currency)
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${String(currency)}.json`
    console.log(`URL: ${URL}`)
    useEffect(() => {
        fetch(URL)
            .then((response) => {
                return response.json(); // Call the json method to parse the response
            })
            .then((resp) => {
                // console.log(`JSON Response: ${JSON.stringify(resp)}`);
                console.log(`Resp: ${resp[currency]}`)
                setData(resp[currency])
            })
    }, [currency])
    console.log(`Data: ${data}`)
    return data
}

export default useCurrencyInfoFromApi;