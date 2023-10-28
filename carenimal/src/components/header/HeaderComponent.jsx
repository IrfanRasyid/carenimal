import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar-style">
            <div className="container-fluid custom-text-color">
                <Link to="/" className="navbar-brand logo">
                    <img src={Logo} alt="logo" className='logo'/>Carenimal
                </Link>
                <div className="d-flex gap-2">
            <Link to="/cart" className="btn">
                <FontAwesomeIcon icon={faCartShopping} className='cart'/>
                    </Link>
                    <div className="profile">
                    <FontAwesomeIcon icon={faUser} />
    <span className="profile-name">Irfan</span>
</div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
