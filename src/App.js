import './App.css';
import Country from './components/converter';
import Menu from './components/menu';
import { CurrencyProvider } from './components/currency';


const data = {
  USA: {
    restaurants: [
      {
        name: 'Savory Table',
        rating: 4.7,
        reviews: 973,
        categories: {
          'Appetisers/Starters': [
            { name: 'Deviled eggs', priceUSD: 82 },
            { name: 'Stuffed mushrooms', priceUSD: 91 },
            { name: 'Jalapeno Poppers', priceUSD: 60 },
            { name: 'Barbecue chicken wings', priceUSD: 94 },
            { name: 'Caprese Skewers', priceUSD: 56 },
            { name: 'Tomato crostini', priceUSD: 74 },
            { name: 'Tuna empanadillas', priceUSD: 104 }
          ],
          'Dessert' :[
            {name: 'Chocolate Lava Cake', priceUSD: 20}
          ],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      },
      {
        name: 'The Urban Fork',
        rating: 4.8,
        reviews: 236,
        categories: {
          'Appetisers/Starters': [],
        'Dessert' :[],
        'Salads' :[],
        'Soups' : [],
        'Main Courses/Entrées' :[],
        'Seafood' :[],
        'Pasta/Noodles' :[],
        'Burgers/Sandwiches' :[]
      }
      },
      {
        name: 'Harvest & Hearth',
        rating: 4.8,
        reviews: 349,
        categories: {
          'Appetisers/Starters': [],
          'Dessert' :[],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      },
      {
        name: 'Crimson Spoon',
        rating: 4.2,
        reviews: 109,
        categories: {
          'Appetisers/Starters': [],
          'Dessert' :[],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      },
      {
        name: 'Eclipse Bistro',
        rating: 4.4,
        reviews: 247,
        categories: {
          'Appetisers/Starters': [],
          'Dessert' :[],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      }
    ]
  },
  France: {
    restaurants: [
      {
        name: 'Savory Table',
        rating: 4.7,
        reviews: 973,
        categories: {
          'Appetisers/Starters': [
            { name: 'Deviled eggs', priceUSD: 82 },
            { name: 'Stuffed mushrooms', priceUSD: 91 },
            { name: 'Jalapeno Poppers', priceUSD: 60 },
            { name: 'Barbecue chicken wings', priceUSD: 94 },
            { name: 'Caprese Skewers', priceUSD: 56 },
            { name: 'Tomato crostini', priceUSD: 74 },
            { name: 'Tuna empanadillas', priceUSD: 104 }
          ],
          'Dessert' :[],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      },
      {
        name: 'The Urban Fork',
        rating: 4.8,
        reviews: 236,
        categories: {
          'Appetisers/Starters': [],
        'Dessert' :[],
        'Salads' :[],
        'Soups' : [],
        'Main Courses/Entrées' :[],
        'Seafood' :[],
        'Pasta/Noodles' :[],
        'Burgers/Sandwiches' :[]
      }
      },
      {
        name: 'Harvest & Hearth',
        rating: 4.8,
        reviews: 349,
        categories: {
          'Appetisers/Starters': [],
          'Dessert' :[],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      },
      {
        name: 'Crimson Spoon',
        rating: 4.2,
        reviews: 109,
        categories: {
          'Appetisers/Starters': [],
          'Dessert' :[],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      },
      {
        name: 'Eclipse Bistro',
        rating: 4.4,
        reviews: 247,
        categories: {
          'Appetisers/Starters': [],
          'Dessert' :[],
          'Salads' :[],
          'Soups' : [],
          'Main Courses/Entrées' :[],
          'Seafood' :[],
          'Pasta/Noodles' :[],
          'Burgers/Sandwiches' :[]
        }
      }
    ]
  }
};

function App() {
  return (
    <CurrencyProvider>
      <div className='container'>
        
        <header className='header'>
          <div className='logoWrapper'>
            <span className='logo'> yummy.</span>
            <button className='menuButton'>☰</button>
          </div>
        </header>

        <Country />

        <div className='mainLayout'>

          <Menu data={data} />
        </div>
      </div>
    </CurrencyProvider>
  );
}

export default App;
