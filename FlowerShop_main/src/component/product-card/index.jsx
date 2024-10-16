import { Avatar, Rate } from "antd";
import React, { useState } from "react";
<<<<<<< HEAD
import "./index.scss";
import { useDispatch } from "react-redux";
import { add } from "../../redux/features/cartSlice";

function ProductCard({ flower }) {
  const [isFavor, setIsFavor] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(flower));
  };

=======
import "./index1.scss";
import { Rating } from "react-simple-star-rating";

function ProductCard() {
  const [isFavor, setIsFavor] = useState(false);

>>>>>>> origin/main
  return (
    <div className="product-card">
      <div className="product-img">
        <img
<<<<<<< HEAD
          src="https://plantsvszombies.wiki.gg/images/3/3e/Sunflower-Almanac.png?20200522063110"
=======
          // src="https://cdn.britannica.com/36/82536-050-7E968918/Shasta-daisies.jpg"
          src="https://th.bing.com/th/id/OIP.D3aC9fNNvh7p2DAm-OTQywHaFj?rs=1&pid=ImgDetMain"
>>>>>>> origin/main
          alt=""
        />

        <Avatar
<<<<<<< HEAD
          size={50}
          className="avatar"
          src="https://i.redd.it/sxb95sif7ys81.png"
=======
          size={45}
          className="avatar"
          src="https://shopgarena.net/wp-content/uploads/2022/07/Hinh-Dai-Dien-Tuong-Lien-Quan-Cute.jpg"
>>>>>>> origin/main
        />
      </div>

      <div className="tags">
<<<<<<< HEAD
        <span className="tag">Fresh</span>
        <span className="tag">wedding</span>
      </div>

      <div className="info">
        <h3>{flower.FlowerName}</h3>
        <Rate value={4.5} disabled allowHalf />
        <div className="price">
          <h2>{flower.Price}</h2>
        </div>
      </div>

=======
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
>>>>>>> origin/main
      <div
        className="favorite"
        onClick={() => setIsFavor(!isFavor)}
        style={{
          color: isFavor ? "red" : "#9f9f9f",
        }}
      >
        <i className="fa fa-heart"></i>
      </div>
<<<<<<< HEAD

      <div className="cart" onClick={handleAddToCart}>
        <i className="fa fa-shopping-cart"></i>
=======
      <div className="cart">
        <i class="bi bi-plus-lg"></i>
>>>>>>> origin/main
      </div>
    </div>
  );
}

export default ProductCard;
