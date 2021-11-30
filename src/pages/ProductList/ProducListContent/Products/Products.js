import React from 'react';
import './Products.scss';
import Product from './Product/Product';

function Products() {
  const PRODUCTS = [
    {
      id: 1,
      name: '브로콜리',
      image: 'whole_broccoli.jpg',
      price: '6000',
      introduction: '너무 맛있는 브로콜리',
    },
    {
      id: 2,
      name: '손질된 브로콜리',
      image: 'cut_broccoli.jpg',
      price: '7500',
      introduction: '편리한 브로콜리',
    },
    {
      id: 3,
      name: '햇 브로컬리',
      image: 'thisyear_broccoli.jpg',
      price: '6500',
      introduction: '갓 수확된 브로컬리',
    },
    {
      id: 4,
      name: '오일 브로컬리',
      image: 'oil_broccoli.jpg',
      price: '11000',
      introduction: '오일에 버무려진 브로컬리',
    },
    {
      id: 5,
      name: '컬리플라워',
      image: 'whole_cauliflower.jpg',
      price: '8000',
      introduction: '건강식 컬리플라워',
    },
    {
      id: 6,
      name: '요리된 컬리플라워',
      image: 'cooked_cauliflower.jpg',
      price: '10000',
      introduction: '먹기만 하면 되는 컬리플라워',
    },
  ];

  return (
    <div className="products">
      {PRODUCTS.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}

export default Products;
