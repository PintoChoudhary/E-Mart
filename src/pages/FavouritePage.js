import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { removeFromFavorites } from '../redux/actions/fav-action';

function FavoritePage() {
  const dispatch = useDispatch();
  const favoritesState = useSelector((state) => state?.favorites);
  console.log(favoritesState);
  const { favorites } = favoritesState;
  const totalPrice = favorites?.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromFavorites = (item) => {
    dispatch(removeFromFavorites(item));
  };
    return (
        <>
            <Navbar/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Your Favorites</h2>
                        <hr />
                        {favorites.length === 0 ? (
                            <p>Your favorites list is empty.</p>
                        ) : (
                            <>
                                <ul className="list-group mb-3">
                                    {favorites.map((item) => (
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
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-danger mx-2"
                                                            onClick={() => handleRemoveFromFavorites(item)} // Handle remove from favorites
                                                        >
                                                            Remove from Favorites
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavoritePage;
