import { useCallback, useEffect, useState } from 'react';
import Product from './components/Product';
import Tabs from './components/Tabs';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [category, setCategory] = useState('all');
  const [fetchData, setFetchData] = useState([]);

  const fetchAllData = useCallback(async () => {
    let res;
    if (category !== 'all') {
      res = await fetch(`https://dummyjson.com/products/category/${category}`);
    } else {
      res = await fetch(`https://dummyjson.com/products`);
    }
    const data = await res.json();
    setFetchData(data.products);
  }, [category]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="app">
      <Tabs onSetCategory={handleCategory} />
      <motion.div layout className="products">
        <AnimatePresence>
          {fetchData.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
