import { toast } from "react-toastify";
import * as httpRequest from "../util/httpRequest";

export const getCartList = async (token) => {
  try {
    const response = await httpRequest.get("account/list-cart-items", {
      params: {
        accessToken: token,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);

  }
};

export const addCart = async (token, quantity, flowerId) => {
  try {
    const addCartForm = new FormData();
    addCartForm.append("accessToken", token);
    addCartForm.append("FlowerID", flowerId);
    addCartForm.append("Quantity", quantity);

    const response = await httpRequest.post(
      "account/add-to-cart",
      addCartForm,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.statusCode === 201) {
      toast.success("Your flower is added !", {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      toast.warning(response.message, {
        position: "top-right",
      });
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartItem = async (token, cartItemId) => {
  try {
    const response = httpRequest.remove(`account/delete-cart-item`, {
      params: {
        cartItemId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateCartItem = async (token, cartItemId, quantity) => {
  try {
    console.log(cartItemId, "cartItemId");
    
    const response = await httpRequest.post(
      `account/update-cart-item`,
      {},
      {
        params: {
          cartItemId,
          quantity,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    

    if (response.statusCode === 201) {
      toast.success("Update cart successfully", {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      toast.warning(response.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
