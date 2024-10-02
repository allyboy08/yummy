import React, { createContext, useState, useEffect } from 'react';

// Create a Context
export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [conversionRate, setConversionRate] = useState(1); // USD to EUR conversion rate
  const [currency, setCurrency] = useState('USD');

  // Fetch conversion rate when the country changes
  useEffect(() => {
    const fetchConversionRate = async () => {
      if (selectedCountry === 'France') {
        try {
          const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
          const data = await response.json();
          setConversionRate(data.rates.EUR);
          setCurrency('EUR');
        } catch (error) {
          console.error('Error fetching conversion rate:', error);
        }
      } else {
        setConversionRate(1); // Back to USD
        setCurrency('USD');
      }
    };

    fetchConversionRate();
  }, [selectedCountry]);

  return (
    <CurrencyContext.Provider value={{ selectedCountry, setSelectedCountry, conversionRate, currency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
