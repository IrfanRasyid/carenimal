import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/HeaderComponent';
import Footer from '../../components/Footer/FooterComponent';
import BannerImage from '../../assets/img/image1.png';
import Card from '../../components/Card/Card';

function HomePage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://652100b8a4199548356cb46d.mockapi.io/productitem');
                const result = await response.json();
                setData(result);
                setFilteredData(result); // Menetapkan data awal saat komponen dimuat
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
                        <img src={BannerImage} alt="Cute cat" />
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
