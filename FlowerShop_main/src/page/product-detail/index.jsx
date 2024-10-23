import React from "react";
import "./index.css";
import { Rating } from "react-simple-star-rating";
import { Avatar, InputNumber } from "antd";
import TabsProduct from "../../component/product-description";
import SuggestProduct from "../../component/suggest-product";

const ProductDetail = () => {
  const imageList = ["pink", "yellow", "green", "red"];

  const shopInfo = [
    {
      key: 1,
      name : "Reviewers",
      number : 100,
    },
    {
      key: 2,
      name : "Products",
      number: "50",
    },
    {
      key: 3,
      name : "Since",
      number: "2023"
    }

  ]   
  

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div className="product-detail">
      <div className="detail">
        <div className="images">
          <div className="images_main">
            <img
              src="https://ih1.redbubble.net/image.3113464535.1401/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
              alt=""
            />
          </div>
          <div className="images_list">
            {imageList.map(() => {
              return (
                <div className="images_img">
                  <img
                    src="https://imgcdn.stablediffusionweb.com/2024/9/17/995b5d86-3442-40aa-a5fe-191218fe4151.jpg"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="info-detail">
          <div className="title">
            Multi-colored Dalat lisianthus for special days (500g)
          </div>
          <div className="rating">
            4.0 <Rating size={20} readonly initialValue={4} /> | 100 reviews
          </div>
          <div>Expire date</div>

          <div className="prices">
            <h1 className="new">$400.00</h1>
            <h4 className="prices_old">$600.00</h4>
            <h6 className="prices_sale">Sale 30%</h6>
          </div>
          <div className="colors">
            {imageList.map((color) => {
              return (
                <div className="chosen-color">
                  <div className="color" style={{ backgroundColor: color }} />
                </div>
              );
            })}
          </div>
          <div className="quantity">
            <button className="quantity_btn">--</button>
            <input className="quantity_input" type="text" defaultValue={1} />
            <button className="quantity_btn">+</button>
          </div>
          <div className="add-cart">
            <button className="cart-btn">Add to Cart</button>
            <button className="wish-btn">Add to Wishlist</button>
          </div>
          <div className="shop">
            <div className="avatar-chat">
              <div className="avatarr">
                <div className="avatar_outline">
                  <Avatar
                    size={50}
                    src="https://i.pinimg.com/236x/e4/92/f8/e492f831968281160a27deae08830e70.jpg"
                  />
                </div>
                <div className="avatar_name">
                  <h2>Frank Ocean</h2>
                  <div>
                    4.0 <Rating size={18} readonly initialValue={4} />
                  </div>
                </div>
              </div>
              <button className="chat">
                Chat <i class="bi bi-chat-left-text-fill"></i>
              </button>
            </div>
            <div className="shop_info">
              {
                shopInfo.map((i) => {
                  if (i.key === 1) {
                    return (
                      <div className="shop_info-detail1 shop_info-detail">
                        <p>{i.name}</p>
                        <span>{i.number}</span>
                      </div>
                    )
                  }
                  return (
                    <div className="shop_info-detail">
                      <p>{i.name}</p>
                      <span>{i.number}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <TabsProduct />
      </div>
      <div className="suggest-product">
        <h1 className="suggest-product_title">Other Product</h1>
        <SuggestProduct />
      </div>
      <div className="suggest-product">
        <h1 className="suggest-product_title">Other Product</h1>
        <SuggestProduct />
      </div>
    </div>
  );
};

export default ProductDetail;