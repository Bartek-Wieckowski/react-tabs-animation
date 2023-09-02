import React from 'react';
import { motion } from 'framer-motion';

const Product = ({ product }) => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
      layout
    >
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
    </motion.div>
  );
};

export default Product;
