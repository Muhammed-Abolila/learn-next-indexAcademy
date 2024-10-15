"use client";
import "@/style/home/home.css";
import {  useEffect, useState } from "react";
import Image from "next/image";
const CsrComp = () => {
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProductData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="home-section">
      <div>fetch api in client component</div>
      <div className="products-container">
        {productData &&
          productData.length > 0 &&
          productData.map((product) => (
            <div className="card">
              <div className="img-container">
                <Image src={product?.image} width="500" height="500" />
              </div>
              <div className="product-details">
                <div className="product-name">{product?.title}</div>
                <div className="product-desc">{product?.description}</div>
                <div className="product-price">{product?.price}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
export default CsrComp;
