import React from 'react';
import "../style/ProdukStyle.css";
import ProdukData from './ProdukData';
import produk1 from "../images/5.jpg";



const Produk = () => {
  return (
    <>
      <div className="produk" id="produk">
        <h1>Produk</h1>
        <p>You can choose your favorite T-Shirt</p>
        <div className="produkCard">
          <ProdukData
            image={produk1}
            namaProduk="Nama Produk 1"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <ProdukData
            image={produk1}
            namaProduk="Nama Produk 2"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <ProdukData
            image={produk1}
            namaProduk="Nama Produk 3"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </div>
      </div>
    </>
  );
};

export default Produk