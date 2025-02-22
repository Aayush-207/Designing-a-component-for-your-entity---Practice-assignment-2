// write product card here
import React from 'react';
import Button from '../components/button';


const Productcard = () => {
  // Static details
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const productPrice = '$99.99';

  const viewProduct = () => {
    alert('View Product clicked');
  };

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-card__image" />
      <h2 className="product-card__name">{productName}</h2>
      <p className="product-card__price">{productPrice}</p>
      <Button onClick={viewProduct} label="View Product" />
    </div>
  );
};

export default Productcard;
