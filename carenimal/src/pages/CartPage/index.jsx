import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Cart.css"; // Import file CSS untuk gaya khusus Cart

const Cart = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const productName = searchParams.get("productName");
  const productPrice = searchParams.get("productPrice");
  const productImage = searchParams.get("productImage");
  const quantity = parseInt(searchParams.get("quantity"));

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [methodPrice, setMethodPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await axios.get("https://653cd85cd5d6790f5ec85982.mockapi.io/paymentMethod");
        setPaymentMethods(response.data);
      } catch (error) {
        console.error("Error fetching payment methods: ", error);
      }
    };

    fetchPaymentMethods();
  }, []);

  useEffect(() => {
    const productTotal = productPrice * quantity;
    const totalPrice = productTotal + methodPrice;
    setTotalPrice(totalPrice);
  }, [productPrice, quantity, methodPrice]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleProductDelete = (productName) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
  };

  const handleAddToCart = () => {
    const product = {
      name: productName,
      price: productPrice,
      quantity: quantity,
    };
    setCart([...cart, product]);
  };

  return (
    <div className="container my-4">
      <h1>Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Label</th>
            <th>Nama Produk</th>
            <th>Gambar</th>
            <th>Harga</th>
            <th>Jumlah Produk</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{productName}</td>
            <td>
              <img src={productImage} alt={productName} style={{ width: "50px", height: "50px" }} />
            </td>
            <td>Rp. {productPrice}</td>
            <td>{quantity}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => {
                  const newQuantity = parseInt(prompt("Edit jumlah produk:", quantity), 10);
                  if (!isNaN(newQuantity)) {
                    handleQuantityChange(newQuantity);
                  }
                }}
              >
                Edit
              </button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => handleProductDelete(productName)}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total-price">Total Harga: Rp. {totalPrice}</div>
      <div className="payment-section mt-4">
        <label htmlFor="payment-method">Metode Pembayaran:</label>
        <select
          className="form-select"
          value={selectedPaymentMethod}
          onChange={(e) => {
            setSelectedPaymentMethod(e.target.value);
            const selectedMethod = paymentMethods.find((method) => method.name === e.target.value);
            if (selectedMethod) {
              setMethodPrice(selectedMethod.price);
            }
          }}
        >
          <option value="">Pilih Metode Pembayaran</option>
          {paymentMethods.map((method) => (
            <option key={method.id} value={method.name}>
              {method.name} - Rp. {method.price}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Cart;
