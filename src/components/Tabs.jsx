import React from 'react';

const Tabs = ({ onSetCategory }) => {
  const handleClick = (newCategory) => {
    onSetCategory(newCategory.toLowerCase());
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleClick('All')}>All</li>
        <li onClick={() => handleClick('Laptops')}>Laptops</li>
        <li onClick={() => handleClick('Smartphones')}>Smartphones</li>
      </ul>
    </nav>
  );
};

export default Tabs;
