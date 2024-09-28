import { Avatar, Rate } from "antd";
import React from "react";
import "./index.scss";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a2ab968-040e-41e2-a7d6-432b0d7956c4/dgg71ev-9d3aadcb-5271-4f4b-ab1d-abbf561362b9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhMmFiOTY4LTA0MGUtNDFlMi1hN2Q2LTQzMmIwZDc5NTZjNFwvZGdnNzFldi05ZDNhYWRjYi01MjcxLTRmNGItYWIxZC1hYmJmNTYxMzYyYjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jRZtAxYP7Ns6Gtw3oLugzi_Qw-B_2wTCXZ_3hOEAzBM"
        alt=""
      />

      <Avatar
        size={50}
        className="avatar"
        src="https://i.redd.it/sxb95sif7ys81.png"
      />

      <div className="tags">
        <span className="tag">Fresh</span>
        <span className="tag">wedding</span>
      </div>

      <h3>Flower title</h3>
      <Rate value={4.5} disabled allowHalf />

      <div className="price">
        <h2>$50</h2>
      </div>

      <div className="favorite">
        <i className="fa fa-heart"></i>
      </div>

      <div className="cart">
        <i className="fa fa-shopping-cart"></i>
      </div>
    </div>
  );
}

export default ProductCard;
