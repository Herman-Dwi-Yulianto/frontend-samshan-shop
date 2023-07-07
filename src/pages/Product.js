import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ProdukData from "../components/ProdukData";
import produk1 from "../images/5.jpg"
import Footer from "../components/Footer";

const Product = () => {
  return (
    <>
      <NavigationBar />
      <div className="produk">
        <h1>Produk</h1>
        <p>You can choose your favorite T-Shirt</p>
        <div className="produkCard">
          <ProdukData
            image={produk1}
            namaProduk="Cotton Combed 16s"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <ProdukData
            image={produk1}
            namaProduk="Cotton Combed 24s"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <ProdukData
            image={produk1}
            namaProduk="Cotton Combed 30s"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </div>

        <div className="produkCard">
          <ProdukData
            image={produk1}
            namaProduk="Cotton Bamboo 16s"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <ProdukData
            image={produk1}
            namaProduk="Cotton Bamboo 16s"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <ProdukData
            image={produk1}
            namaProduk="Cotton Bamboo 16s"
            price="999"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Product;
