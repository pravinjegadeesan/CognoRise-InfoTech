const apiUrl = 'https://v6.exchangerate-api.com/v6/ae06067da8bada4d1e6e1748/latest/inr';

// Function to fetch currency rates
async function fetchCurrencyRates() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Error fetching currency rates:', error);
  }
}

// Function to populate currency options
async function populateCurrencyOptions() {
  const rates = await fetchCurrencyRates();
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  for (const currency in rates) {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.text = currency;
    option1.value = currency;

    option2.text = currency;
    option2.value = currency;

    fromCurrencySelect.appendChild(option1);
    toCurrencySelect.appendChild(option2);
  }
}

// Function to perform currency conversion
async function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  const rates = await fetchCurrencyRates();
  const exchangeRate = rates[toCurrency] / rates[fromCurrency];
  const result = (amount * exchangeRate).toFixed(2);

  document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}

// Event listener for conversion button click
document.getElementById('convertBtn').addEventListener('click', convertCurrency);

// Populate currency options when the page loads
document.addEventListener('DOMContentLoaded', populateCurrencyOptions);
