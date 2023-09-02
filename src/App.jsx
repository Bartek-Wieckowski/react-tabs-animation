import { useEffect, useState } from 'react';
import Product from './components/Product';
import Tabs from './components/Tabs';

function App() {
  const [category, setCategory] = useState('all');
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchDataAll = async () => {
      let res;
      if (category !== 'all') {
        res = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
      } else {
        res = await fetch(`https://dummyjson.com/products`);
      }
      const data = await res.json();
      setFetchData(data.products);
      console.log(data.products);
    };

    fetchDataAll();
  }, [category]);

  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="app">
      <Tabs onSetCategory={handleCategory} />
      <div className="products">
        <Product />
      </div>
    </div>
  );
}

export default App;
