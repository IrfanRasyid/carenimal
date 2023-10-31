import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import "./DetailProduct.css";

function DetailProduct() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const handleAddAnotherItem = () => {
    const previousData = JSON.parse(
      localStorage.getItem("previousData") || "[]"
    );
    const productData = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      quantity: Number(quantity), // Mengonversi nilai ke tipe data Number
      productImage: product.image,
    };
    previousData.push(productData);
    localStorage.setItem("previousData", JSON.stringify(previousData));
    const detailUrl = `/product/${product.id}`;
    window.location.href = detailUrl;
  };

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `https://652100b8a4199548356cb46d.mockapi.io/productitem/${id}`
      );
      const data = await response.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));

    const cartData = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      quantity: quantity,
      productImage: product.image,
    };
    const existingCart = localStorage.getItem("cart");
    const updatedCart = existingCart
      ? JSON.stringify([...JSON.parse(existingCart), cartData])
      : JSON.stringify([cartData]);
    localStorage.setItem("cart", updatedCart);

    window.location.href = "/cart";
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
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
        <button className="purchase-button" onClick={handleAddToCart}>
          Buy Now
        </button>
        <button className="purchase-button2" onClick={handleAddAnotherItem}>
          Add to Cart
        </button>
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
}

export default DetailProduct;
