import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { addToCart, delItem } from '../redux/actions/cart-actions';
import { clearCart , decrementQuantity} from '../redux/actions/cart-actions';
function Cart() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.cart);
  const { Carts } = cartState;
  const totalPrice = Carts?.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      dispatch(decrementQuantity(updatedItem));
    } else {
      // If quantity is already 1, remove the item from the cart
      handleRemoveItem(item);
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(delItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h2>Your Cart</h2>
            <hr />
            {Carts.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="list-group mb-3">
                  {Carts.map((item) => (
                    <li key={item.id} className="list-group-item">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7">
                          <h5>{item.title}</h5>
                          <p>Price: $ {item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                          <div>
                            <button
                              className="btn btn-sm btn-secondary mr-2 mx-2"
                              onClick={() => handleDecrement(item)}
                            >
                              -
                            </button>
                            <button
                              className="btn btn-sm btn-secondary mr-2 mx-1"
                              onClick={() => handleIncrement(item)}
                            >
                              +
                            </button>
                            <button
                              className="btn btn-sm btn-danger mx-2"
                              onClick={() => handleRemoveItem(item)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
              </>
            )}
          </div>
          <div className="col-md-4 d-flex justify-content-center align-self-start">
            <div className="border-left pl-4">
              <h3>Total Price: $ {totalPrice.toFixed(2)}</h3>
             
              <div className="text-center mt-4">
                <button className="btn btn-dark text-light btn-lg">Checkout</button>
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-danger btn-lg" onClick={handleClearCart}>
                  Clear Cart
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
