import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header className="main_menu home_menu" >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"><i className="fas fa-bars" /></span>
                                </button>
                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="index.html">Home</a> */}
                                            <NavLink className="nav-link" to={"/"}>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="about.html">about</a> */}
                                            <NavLink className="nav-link" to={"/about"}>About</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Product
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                {/* <a className="dropdown-item" href="product_list.html"> product list</a> */}
                                                <NavLink className="dropdown-item" to={"/prodect"}>Product List</NavLink>
                                                {/* <a className="dropdown-item" href="single-product.html">product details</a> */}
                                                <NavLink className="dropdown-item" to={"/prodectdetail"}>Product Details</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                {/* <a className="dropdown-item" href="login.html">login</a> */}
                                                <NavLink className="dropdown-item" to={"/login"}>Login</NavLink>
                                                {/* <a className="dropdown-item" href="checkout.html">product checkout</a> */}
                                                <NavLink className="dropdown-item" to={"/prodectchek"}>Product Checkout</NavLink>
                                                {/* <a className="dropdown-item" href="cart.html">shopping cart</a> */}
                                                <NavLink className="dropdown-item" to={"/cart"}>Shopping Cart</NavLink>
                                                {/* <a className="dropdown-item" href="confirmation.html">confirmation</a> */}
                                                <NavLink className="dropdown-item" to={"/confirmation"}>Confirmation</NavLink>
                                                {/* <a className="dropdown-item" href="elements.html">elements</a> */}
                                                <NavLink className="dropdown-item" to={"/elements"}>Elements</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                blog
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                {/* <a className="dropdown-item" href="blog.html"> blog</a>*/}
                                                <NavLink className="dropdown-item" to={"/blog"}>Blog</NavLink>
                                                {/* <a className="dropdown-item" href="single-blog.html">Single blog</a> */}
                                                <NavLink className="dropdown-item" to={"/singalblog"}>Single Blog</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="contact.html">Contact</a> */}
                                            <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hearer_icon d-flex align-items-center">
                                    <a id="search_1" href="javascript:void(0)"><i className="ti-search" /></a>
                                    <a href="cart.html">
                                        <i className="flaticon-shopping-cart-black-shape" />
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header >
        </div>

    );
}

export default Header;