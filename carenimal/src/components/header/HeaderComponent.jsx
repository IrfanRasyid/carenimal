import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Mengimpor Link

function HeaderComponent({ products, setFilteredProducts }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Melakukan pencarian data berdasarkan nilai yang dimasukkan pengguna
        const filteredData = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filteredData);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar-style">
            <div className="container-fluid custom-text-color">
                <Link to="/" className="navbar-brand custom-text-color">
                    Carenimal
                </Link>
                <div className="d-flex gap-2">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cari Keperluan Hewan Kamu"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            style={{ color: 'black' }} // Menambahkan inline styling
                        />
                        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                    <Link to="/cart" className="btn btn-secondary">
                        Cart
                    </Link> {/* Menambahkan tombol untuk halaman Cart */}
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt="Irfan"
                                className="rounded-circle"
                                width="30"
                                height="30"
                            />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile <span className="badge bg-info">New</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
