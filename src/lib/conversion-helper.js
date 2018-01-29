const symbols = {
  US: '$',
  BE: '€',
  SE: 'kr',
};

const rates = {
  US: 1,
  BE: 0.81,
  SE: 7.88,
};

const getCurrencySymbolForCountry = country => symbols[country];

const toCurrencyString = price => price.toFixed();

const convertFromUSD = (locale, price) => (price * rates[locale]);

const toLocaleCurrencyString = (price = 0, locale = 'US') => `${getCurrencySymbolForCountry(locale)} ${toCurrencyString(convertFromUSD(locale, price))}`;

export default toLocaleCurrencyString;
