import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cart-actions';
import Footer from '../components/Footer';
function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()


  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };

    getData();
  }, [id]);

  const addToCartHandler =() =>{
    dispatch(addToCart(product))
  }
  if (isLoading) {
    return (
      <div className="loading-spinner">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{
            backgroundColor: '#fff',
            padding: '40px',
            marginTop: '80px',
            borderRadius: '10px',
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h5>{product.title}</h5>
              <p>{product.category}</p>
              <p className="card-text">{product.rating.rate}<i className='fa fa-star'></i> <small> (out of {product.rating.count})</small></p>

              <p>{product.description}</p>
              <h2>
                <span>$</span>
                {product.price}
                <span style={{ fontSize: '22px', marginLeft: '10px', color: '#888' }}>
                  <del>
                    <span>$</span>
                    {product.price * 1.2} 
                  </del>
                </span>
              </h2>
              <br />
              <button className="btn btn-dark text-light radius border-4" onClick={addToCartHandler}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ProductDetailPage;
