import { Avatar, Rate } from "antd";
import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { add } from "../../redux/features/cartSlice";


function ProductCard({ flower }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(flower));
  };

  return (
    <div className="product-card">
      <img
        src="https://plantsvszombies.wiki.gg/images/3/3e/Sunflower-Almanac.png?20200522063110"
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

      <h3>{flower.FlowerName}</h3>
      <Rate value={4.5} disabled allowHalf />

      <div className="price">
        <h2>{flower.Price}</h2>
      </div>

      <div className="favorite">
        <i className="fa fa-heart"></i>
      </div>

      <div className="cart" onClick={handleAddToCart}>
        <i className="fa fa-shopping-cart"></i>
      </div>
    </div>
  );
}

export default ProductCard;
