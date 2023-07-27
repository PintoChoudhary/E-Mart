import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { addToCart } from '../redux/actions/cart-actions';
import {addToFavorites , removeFromFavorites} from '../redux/actions/fav-action'
function Product(props) {
    const { id, title, image, price, rating } = props.data
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.favorites);
    const isFavorite = favorites.find((item) => item.id === id);
    const addToCartHandler = () => {
        dispatch(addToCart(props.data))
    }
    const toggleFavoriteHandler = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(props.data));
        } else {
            dispatch(addToFavorites(props.data));
        }
    };
    return (
        <>

            <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                    <img src={image} className="card-img-top" alt={title} height={'250px'} />
                    <div className="card-body">
                        <h5 className="card-title mb-0">{title.substring(0, 25)}</h5>
                        <p className="card-text lead fw-bold">${price}</p>
                        <p className="card-text">{rating.rate}<i className='fa fa-star'></i> <small> (out of {rating.count})</small></p>
                        <button className="btn btn-dark text-light radius border-4 mb-3" onClick={addToCartHandler}>Add to Cart</button>
                        <Link to={"/products/detail/" + id} className="btn btn-outline-dark mb-3">Show Details</Link>
                        <button
                            className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-dark text-danger'}`}
                            onClick={toggleFavoriteHandler}
                        >
                            {isFavorite ? 'Remove from Favorites ' : 'Add to Favorites '}<i className="fa fa-heart me-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
