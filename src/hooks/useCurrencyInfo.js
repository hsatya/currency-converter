import { useEffect, useState } from "react";

const currentDate = new Date();

// let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`;
// Get year, month, and day
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
const day = String(currentDate.getDate()).padStart(2, "0");

// Format the date as YYYY-MM-DD
const formattedDate = `${year}-${month}-${day}`;

function useCurrencyInfo(currency, date = formattedDate) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((json) => setData(json[currency]));
  }, [currency, date]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
