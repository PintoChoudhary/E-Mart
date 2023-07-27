import React from 'react';
import HomeProducts from './HomeProduct';

function Home() {
    return (
        <>
            <div
                className="hero"
                style={{
                    opacity: 0,
                    transform: 'translateY(-20px)',
                    animation: 'fadeInUp 500ms forwards',
                }}
            >
                <div className="card text-bg-dark border-0">
                    <img src="assets/bg.png" className="card-img" alt="Background" height={'830px'} />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 text-dark fw-bolder">NEW TRENDS</h5>
                            <p className="card-text text-dark" style={{
                                opacity: 0,
                                animation: 'fadeInText 1000ms forwards',
                            }}>
                                Your favourite destination for fashion is here... <br /> Daily wears, Casuals, And
                                Many More
                            </p>
                            <a href="#down" className="btn btn-outline-dark btn-radius-border-3">
                                Explore Now <i className="fa fa-angle-double-down me-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="down"
                style={{
                    opacity: 0,
                    animation: 'fadeIn 500ms forwards',
                }}
            >
                <HomeProducts />
            </div>
        </>
    );
}

export default Home;
