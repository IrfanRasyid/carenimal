import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router'; // Mengganti useHistory dengan useNavigate
import Button from '../../components/Button/Button';
import './Card.css';

const Card = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://652100b8a4199548356cb46d.mockapi.io/productitem');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        };

        fetchData();
    }, []);

    const handleBuy = (productId) => {
        // Navigasi ke halaman detail produk dengan ID produk yang dipilih
        navigate(`/product/${productId}`);
    };

    return (
        <div>
            <Row>
                {data &&
                    data.map((product) => (
                        <Col key={product.id}>
                            <div
                                className="card bg-base-100 shadow"
                                style={{ backgroundColor: '#C7EBFF', width: '200px', height: '300px', flexShrink: 0 }}
                            >
                                <img src={product.image} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Rp. {product.price}</p>
                                    <Button
                                        type="button"
                                        className="btn btn-primary"
                                        text="Buy"
                                        onClick={() => handleBuy(product.id)} // Gunakan fungsi handleBuy dengan ID produk
                                        style={{ backgroundColor: '#2072A9', color: 'white' }}
                                    />
                                </div>
                            </div>
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default Card;
