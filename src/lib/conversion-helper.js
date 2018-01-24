const symbols = {
  US: '$',
  BE: '€',
  GB: '£',
};

const rates = {
  US: 1,
  BE: 0.81,
  GB: 0.71,
};

const getCurrencySymbolForCountry = country => symbols[country];

const toCurrencyString = price => price.toFixed();

const convertFromUSD = (locale, price) => (price * rates[locale]);

const toLocaleCurrencyString = (price, locale = 'USA') => `${getCurrencySymbolForCountry(locale)}${toCurrencyString(convertFromUSD(locale, price))}`;

export default toLocaleCurrencyString;
