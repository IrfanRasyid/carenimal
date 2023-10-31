import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/HeaderComponent';
import Footer from '../../components/Footer/FooterComponent';
import BannerImage from '../../assets/img/image1.png';
import BannerImage2 from '../../assets/img/image2.png';
import BannerImage3 from '../../assets/img/image3.png';
import Card from '../../components/Card/Card';

function HomePage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_PRODUCT_API);
                const result = await response.json();
                setData(result);
                setFilteredData(result); // Set initial data when the component loads
            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filtered);
    };    

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };


    

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="text-center hero-content">
                    <div className="w-auto">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={BannerImage} className="d-block w-100" alt="Banner"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={BannerImage2} className="d-block w-100" alt="Banner"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={BannerImage3} className="d-block w-100" alt="Banner"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center gap-2 my-4">
                        <div className="input-group" style={{ maxWidth: '400px' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cari Keperluan Hewan Kamu"
                                value={search}
                                onChange={handleInputChange}
                                style={{ color: 'black' }}
                            />
                            <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                    <div className="container xs={1} md={2} lg={4} g-4">
                        <Card data={filteredData} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
