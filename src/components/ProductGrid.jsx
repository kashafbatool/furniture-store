import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ items, language, t, favorites, onToggleFavorite, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          language={language}
          t={t}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
