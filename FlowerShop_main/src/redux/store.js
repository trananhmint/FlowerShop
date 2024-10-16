<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";
=======
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
>>>>>>> origin/main

export const store = configureStore({
  reducer: {
    cart: cartSlice,
<<<<<<< HEAD
    user: userSlice,
  },
});
=======
  },
});
>>>>>>> origin/main
