import React, { useContext, useState } from 'react';
import Item from './items';
import { CurrencyContext } from './currency';

const Menu = ({ data }) => {
  const { selectedCountry, conversionRate, currency } = useContext(CurrencyContext);
  const [selectedRestaurant, setSelectedRestaurant] = useState(data[selectedCountry].restaurants[0]);

  const convertPrice = (price) => (price * conversionRate).toFixed(2);

  return (
    <div style={styles.wrapper}>
      {/* Left - Restaurants */}
      <div style={styles.restaurantList}>
        {data[selectedCountry].restaurants.map((restaurant, index) => (
          <div 
            key={index} 
            style={styles.restaurantItem}
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <h3>{restaurant.name}</h3>
            <p>{restaurant.rating} | {restaurant.reviews} reviews</p>
          </div>
        ))}
      </div>

      {/* Right - Menu */}
      <div style={styles.menu}>
        {selectedRestaurant.categories['Appetisers/Starters'] ? (
          <>
            <h3 style={styles.menuCategory}>Appetisers/Starters</h3>
            <ul style={styles.menuItems}>
              {selectedRestaurant.categories['Appetisers/Starters'].map((item, i) => (
                <Item key={i} item={item} convertPrice={convertPrice} currency={currency} />
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
  },
  restaurantList: {
    width: '10%',
    marginRight: '10px',
    // borderRight: '2px solid #e0e0e0',
  },
  restaurantItem: {
    // padding: '10px',
    cursor: 'pointer',
    borderBottom: '2px solid #e0e0e0',
  },
  menu: {
    width: '10%',
    padding: '10px',
  },
  menuCategory: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  menuItems: {
    listStyle: 'none',
    padding: 0,
  }
};

export default Menu;
