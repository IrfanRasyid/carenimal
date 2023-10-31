import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setData } from "../../redux/productSlice";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.product.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_PRODUCT_API);
        const result = await response.json();
        dispatch(setData(result));
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleBuy = (productId, productName, productPrice, productImage) => {
    const dataForReceipt = {
      productName: productName,
      productPrice: productPrice,
      productImage: productImage,
      quantity: 1,
    };
    localStorage.setItem("dataForReceipt", JSON.stringify(dataForReceipt));
    const detailUrl = `/product/${productId}`;
    window.location.href = detailUrl;
  };

  return (
    <div>
      <Row>
        {data &&
          data.map((product) => (
            <Col key={product.id}>
              <div
                className="card bg-base-100 shadow custom-card"
                style={{ backgroundColor: '#C7EBFF', width: '200px', height: 'auto', flexShrink: 'auto' }}
                                 
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Rp. {product.price}</p>
                  <Button
                    type="button"
                    className="btn btn-primary"
                    text="Buy"
                    onClick={() =>
                      handleBuy(
                        product.id,
                        product.name,
                        product.price,
                        product.image
                      )
                    }
                    style={{ backgroundColor: "#2072A9", color: "white" }}
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
