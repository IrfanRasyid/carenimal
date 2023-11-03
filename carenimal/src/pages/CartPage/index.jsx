import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Cart.css";
import { Link } from "react-router-dom";
import filteredData from "../HomePage"
import Card from "../../components/card/Card";

const Cart = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [methodPrice, setMethodPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem("dataForReceipt"));
    if (dataFromStorage) {
      setProductName(dataFromStorage.productName);
      setProductPrice(dataFromStorage.productPrice);
      setProductImage(dataFromStorage.productImage);
      setQuantity(dataFromStorage.quantity);
    }
  }, []);



  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await axios.get(process.env.VITE_PAYMENT_API);
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


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuantity, setNewQuantity] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveQuantity = () => {
    if (!isNaN(newQuantity)) {
      handleQuantityChange(newQuantity);
      setIsModalOpen(false);
    }
  };

  const handleSaveDataForReceipt = () => {
    const dataForReceipt = {
      productName: productName,
      productImage: productImage,
      productPrice: productPrice,
      quantity: quantity,
      totalPrice: totalPrice,
      selectedPaymentMethod: selectedPaymentMethod,
      methodPrice: methodPrice,
    };

    localStorage.setItem("dataForReceipt", JSON.stringify(dataForReceipt));

    const receiptUrl = "/transaction-receipt";
    window.location.href = receiptUrl;
  };

  const handleDeleteItem = () => {
    // Lakukan operasi penghapusan di sini
    setProductName("");
    setProductPrice("");
    setProductImage("");
    setQuantity("");
    setTotalPrice("");
    setSelectedPaymentMethod("");
    setMethodPrice("");
  };

  return (
    <div className="container my-4">
      <h1>Cart</h1>
      <table className="table">
        <thead>
          <tr>
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
            <td>{productName}</td>
            <td>
              <img
                src={productImage}
                alt={productName}
                style={{ width: "50px", height: "50px" }}
              />
            </td>
            <td>Rp. {productPrice}</td>
            <td>{quantity}</td>
            <td>
              <button className="btn btn-primary" onClick={handleOpenModal}>
                Edit
              </button>
              {isModalOpen && (
                <div className="modal-container">
                  <div className="modal-content">
                    <h2>Edit Jumlah Produk</h2>
                    <input
                      type="number"
                      value={newQuantity}
                      onChange={(e) => setNewQuantity(Number(e.target.value))}
                    />
                    <div className="button-container">
                      <button className="save-button" onClick={handleSaveQuantity}>
                        Simpan
                      </button>
                      <button className="cancel-button" onClick={handleCloseModal}>
                        Batal
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </td>
            <td>
            <button
                className="btn btn-danger"
                onClick={handleDeleteItem} // Tambahkan pemanggilan fungsi handleDeleteItem
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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

      <div className="total-price">Total Harga: Rp. {totalPrice}</div>
      <div className="payment-section mt-4">
       
      </div>
      <button className="btn btn-primary purchase-button" onClick={handleSaveDataForReceipt} disabled={!productName, !paymentMethods}>
        Simpan Data untuk Receipt
      </button>
      <Link className='btn btn-primary purchase-button2' to="/">Tambah Item Lain</Link>
      <br/>
      <h1>Kamu Mungkin Juga Suka</h1>
      <div className="container xs={1} md={2} lg={4} g-4">
        <Card data={filteredData} />
      </div>
    </div>
    
  );
};

export default Cart;
