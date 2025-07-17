import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className='row justify-content-between py-2 px-3 align-items-center header-style'>
                <div className='col-2'>
                    <h4 className='m-0'>logo</h4>
                </div>
                <div className='col-8 d-flex justify-content-between'>
                    <ul className='d-flex gap-5 m-0'>
                        <NavLink to="/" className='list-unstyled fs-5 text-decoration-none'>HOME</NavLink>
                        <NavLink to="/gadgets" className='list-unstyled fs-5 text-decoration-none'>GADGETS</NavLink>
                        <NavLink to="/fashion" className='list-unstyled fs-5 text-decoration-none'>FASHION</NavLink>
                    </ul>
                    <div className='d-flex gap-3'>
                        <div className='wishlist'>
                            <i className="fa-solid fa-heart fs-3 maroon-color"></i>
                        </div>
                        <div className='cart'>
                            <i className="fa-solid fa-cart-shopping fs-3 text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;