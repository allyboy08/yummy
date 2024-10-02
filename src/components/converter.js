import React, { useContext } from 'react';
import { CurrencyContext } from './currency';

const Country = () => {
  const { selectedCountry, setSelectedCountry } = useContext(CurrencyContext);

  return (
    <div style={styles.tabs}>
      <button 
        onClick={() => setSelectedCountry('USA')} 
        >
        USA
      </button>
      <button 
        onClick={() => setSelectedCountry('France')} 
        >
        FRANCE
      </button>
    </div>
  );
};

const styles = {
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  tabButton: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    marginRight: '10px',
  }
};

export default Country;
