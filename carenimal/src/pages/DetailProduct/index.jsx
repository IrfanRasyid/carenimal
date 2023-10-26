import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Mengimpor useParams
import "./DetailProduct.css";

function DetailProduct() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State untuk jumlah produk yang akan dibeli
  const { id } = useParams(); // Menggunakan useParams untuk mendapatkan parameter id

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://652100b8a4199548356cb46d.mockapi.io/productitem/${id}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]); // Memasukkan id ke dalam dependency array

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    // Logika untuk menambahkan produk ke keranjang
    // Anda dapat mengimplementasikan logika penyimpanan sesuai kebutuhan aplikasi Anda
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
  <div className="product-details">
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>Rp. {product.price}</p>
    <div className="quantity-container">
      <label>Quantity</label>
      <div>
        <button onClick={handleDecrease}>-</button>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
    <button className="purchase-button" onClick={addToCart}>Beli Sekarang</button>
  </div>
  <div className="product-image">
    <img src={product.image} alt={product.name} />
  </div>
</div>
  );
}

export default DetailProduct;
