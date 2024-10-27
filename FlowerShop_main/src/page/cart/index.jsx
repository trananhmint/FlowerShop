import React, { useEffect, useState } from "react";
import "./index.scss";
import { Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState({
    orderDetail: "",
    quantity: 1,
    paidPrice: 0,
  });

  const fetchCart = async () => {
    const response = await axios.get(
      `https://localhost:7026/api/account/list-cart-items`,
      {
        params: {
          accessToken: token,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCart(response.data);
    console.log(response.data);
  };

  const fetchUpdateCart = async (cartItemId, quantity) => {
    const response = await axios.post(
      `https://localhost:7026/api/account/update-cart-item`,
      {},
      {
        params: {
          cartItemId: cartItemId,
          quantity: quantity,

        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
    // fetchUpdateCart()
  }, []);

  const handleUpdateCart = (cartItemId, quantity) => {
    fetchUpdateCart(cartItemId, quantity);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart">
        <div className="cart_header">
          <h3>Cart</h3>

          <span> 9 items in your Cart</span>
        </div>
        <div className="cart-body">
          {cart.map((item, index) => {
            console.log(item);
            return (
              <CartItem
                key={index}
                item={item}
                handleUpdateCart={handleUpdateCart}
              />
            );
          })}
        </div>

        <div className="total">
          <div>
            <h3>Total</h3>
            <h3>500.000VND</h3>
          </div>
          <Link to="/checkout">
            <button>Check Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const CartItem = ({ item, handleUpdateCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  console.log(item.quantity, "quantity");
  
  const onChangeQuantity = (e) => {
    console.log(e.target.value);
    
    const quantityValue = Number(e.target.value);
    let value = quantityValue - item.quantity;
    console.log(value, "value");
    
    setQuantity(quantityValue);
    handleUpdateCart(item.flowerId, value)
  }


  return (
    <div className="cart-item">
      <div className="cart-item_heading">
        <div className="shop-info">
          <Avatar size={60} src="https://i.redd.it/sxb95sif7ys81.png" />
          <div>
            <h3>shop name</h3>
            {/* <p>Title</p> */}
          </div>
        </div>

        <button>Select All</button>
      </div>
      <div className="cart-item_products">
        <div className="item">
          <img
            src="https://plantsvszombies.wiki.gg/images/3/3e/Sunflower-Almanac.png?20200522063110"
            alt=""
          />
          <h3>cak cak cak</h3>

          <p>
            ${item.paidPrice}
            <del>${500}</del>
          </p>
          <div className="quantity">
            <button onClick={() => handleUpdateCart(item.flowerId, -1)}>--</button>
            <input
              type="text"
              inputMode="numeric"
              value={item.quantity}
              onChange={(e) => onChangeQuantity(e)}
            />
            <button onClick={() => handleUpdateCart(item.flowerId, 1)}>+</button>
          </div>

          <p>${item.paidPrice}</p>

          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
};

export default Cart;
