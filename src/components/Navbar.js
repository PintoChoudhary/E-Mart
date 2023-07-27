import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
export default function Navbar() {
    const cartState = useSelector((state) => state?.cart);

    const { numberCart } = cartState;
    const favorites = useSelector((state) => state.favorites.favorites);
    const favoriteCount = favorites.length;
    const navigate = useNavigate()
    const [loginStatus, setLoginStatus] = useState(false)
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            setLoginStatus(false)
        } else {
            setLoginStatus(true)
        }
    }, [loginStatus])
    const onLogOut = () => {
        localStorage.clear()
        setLoginStatus(false)
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
            <div className='container'>
                <div className='d-flex flex-fill ms-auto'>

                <NavLink className="navbar-brand fw-bold fs-1 flex-fill " to="/">Bombay Collection</NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-4 mb-2 mb-lg-0 fs-5 flex-fill" >
                        <li className="nav-item">
                            <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                        </li>

                    </ul>
                    <div className="buttons flex-fill">
                        {loginStatus ? (
                            <NavLink to="/login" className="btn btn-outline-danger" onClick={onLogOut}><i className="fa fa-sign-out me-1"></i> Log Out</NavLink>

                        ) : (

                            <NavLink to='/login' className="btn btn-outline-dark" ><i className="fa fa-sign-in me-1"></i> Log in</NavLink>
                        )}
                        <NavLink to="/register" className="btn btn-outline-dark mx-1"><i className="fa fa-user-plus me-1"></i> Register</NavLink>
                        <NavLink to="/favorites" className="btn btn-outline-dark mx-1">
                            <i className="fa fa-heart me-1"></i> Favorite ({favoriteCount})
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark mx-1"><i className="fa fa-shopping-cart me-1"></i> Cart ({numberCart})</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
