import { Avatar, Rate } from "antd";
import React, { useState } from "react";
import "./index1.scss";
import { Rating } from "react-simple-star-rating";

function ProductCard() {
  const [isFavor, setIsFavor] = useState(false);

  return (
    <div className="product-card">
      <div className="product-img">
        <img
          // src="https://cdn.britannica.com/36/82536-050-7E968918/Shasta-daisies.jpg"
          src="https://th.bing.com/th/id/OIP.D3aC9fNNvh7p2DAm-OTQywHaFj?rs=1&pid=ImgDetMain"
          alt=""
        />

        <Avatar
          size={45}
          className="avatar"
          src="https://shopgarena.net/wp-content/uploads/2022/07/Hinh-Dai-Dien-Tuong-Lien-Quan-Cute.jpg"
        />
      </div>

      <div className="tags">
        <span className="tag">FRESH</span>
        <span className="tag">WEDDING</span>
      </div>
      <div className="info">
        <span>Flower title</span>
        {/* <Rate size={20} value={4.5} disabled allowHalf /> */}
        <div>
          <Rating size={14} readonly initialValue={4} /> (100)
        </div>

        <div className="price">
          <span>$50.00</span>
          <span>$100.00</span>
        </div>
      </div>
      <div
        className="favorite"
        onClick={() => setIsFavor(!isFavor)}
        style={{
          color: isFavor ? "red" : "#9f9f9f",
        }}
      >
        <i className="fa fa-heart"></i>
      </div>
      <div className="cart">
        <i class="bi bi-plus-lg"></i>
      </div>
    </div>
  );
}

export default ProductCard;
