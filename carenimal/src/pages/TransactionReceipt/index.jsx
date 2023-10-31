import React, { useState, useEffect } from "react";

const TransactionReceipt = () => {
  const [dataForReceipt, setDataForReceipt] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("dataForReceipt");
    if (storedData) {
      setDataForReceipt(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="container my-4">
      <h1>Transaksi Anda Berhasil!</h1>
      <div>
        <p>{dataForReceipt.productName}</p>
        <p>
          {" "}
          <img
            src={dataForReceipt.productImage}
            alt={dataForReceipt.productName}
            style={{ width: "50px", height: "50px" }}
          />
        </p>
        <p>Harga: Rp. {dataForReceipt.productPrice}</p>
        <p>Jumlah: {dataForReceipt.quantity}</p>
        <p>Metode Pembayaran: {dataForReceipt.selectedPaymentMethod}</p>
        <p>Pajak Pembayaran: Rp. {dataForReceipt.methodPrice}</p>
        <p>Total Harga: Rp. {dataForReceipt.totalPrice}</p>
        
      </div>
    </div>
  );
};

export default TransactionReceipt;
