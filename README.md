# React Currency Converter App

This is a simple React currency converter app that allows you to convert currencies based on the latest exchange rates. The app fetches currency data from an external API and provides a user-friendly interface for currency conversion.

## Features

- Convert currencies with real-time exchange rates.
- Select the currency type for both input and output.
- Swap between input and output currencies.
- Responsive design for various screen sizes.

## Installation

cd react-currency-converter

1. Clone the repository to your local machine:

```bash
    git clone https://github.com/hsatya/currency-converter.git
```

2. Navigate to the project directory:

```bash
  cd currency-converter
```

3. Install dependencies using npm or yarn:

```bash
  npm install
  or
  yarn install
```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   or
   yarn dev

   ```

2. Open your browser and go to http://localhost:3000 to view the app.
3. Enter the amount you want to convert and select the input and output currencies.
4. Click the "Convert" button to see the converted amount.

## Components

### InputBox

A reusable input box component that includes an input field for amount and a dropdown to select the currency type.

#### Props:

- label: Label for the input box.
- amount: Amount value.
- onAmountChange: Function to handle amount change.
- onCurrencyChange: Function to handle currency change.
- currencyOptions: Array of currency options.
- selectCurrency: Selected currency.
- amountDisable: Boolean to disable amount input.
- currencyDisable: Boolean to disable currency selection.
- className: Additional CSS classes.

### Custom Hook: useCurrencyInfo

A custom hook to fetch currency data based on the selected currency.

```javascript
import { useEffect, useState } from "react";

function useCurrencyInfo(currency, date) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((json) => setData(json[currency]));
  }, [currency, date]);

  return data;
}

export default useCurrencyInfo;
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

[MIT](https://choosealicense.com/licenses/mit/)

---

Feel free to customize and improve upon this project according to your needs! If you have any questions or suggestions, please feel free to reach out.(harshitsatya5@gmail.com).
