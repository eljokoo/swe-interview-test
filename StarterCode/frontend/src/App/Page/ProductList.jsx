import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from '../Components/Container';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
    }).catch((error) => {
      console.log('Error fetching products', error);
    });
  }, []);

  //implement the get products function
  const fetchProducts = async () => {
    //get product data from backend
    return (await axios.get('http://localhost:5001/api/products')).data;
  };

  //implement the delete function
  const handleDelete = (id) => {
    //delete from backend
    axios.delete(`http://localhost:5001/api/products/${id}`).then((res) => {
      //delete from frontend
      setProducts(products.filter((product) => product.id !== id));
    }
    ).catch((error) => {
      console.log('Error deleting product', error);
    });
  };

  return (
    <>
      <h1 className='title'>Simple Card List</h1>
      <Container products={products} onDelete={(id) => handleDelete(id)} />
    </>
  );
};

export default ProductList;