import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.list = action.payload;
    },
    addToCart: (state, action) => {
      let newItem = state.list.find(
        (product) => product._id === action.payload
      );

      let itemInCart = state.cart.find((item) => item._id === newItem._id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === newItem._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    },
    addAllToCart: (state, action) => {
      state.cart = action.payload
    },
    removeOneCart: (state, action) => {
      let itemToDelete = state.cart.find((item) => item._id === action.payload);

      return (
        itemToDelete.quantity > 1 && {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
      );
    },
    removeAllCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    },
    clearCart: (state) => {
      state.cart = initialState.cart;
    },
  },
});
const { reducer, actions } = cartSlice;

export const {
  setProductList,
  addToCart,
  clearCart,
  removeOneCart,
  removeAllCart,
  totalAmount,
  addAllToCart
} = actions;

export default reducer;

export const fetchAllProducts = (search, searching, price) => {
  return async (dispatch) => {
    let expReg = /term/;
    
    let listWords = [
      "placas de video radeon amd",
      "placas de video geforce",
      "mothers amd",
      "mothers intel",
      "procesadores amd",
      "procesadores intel",
      "notebooks",
      "fuentes",
      "procesadores amd",
      "procesadores intel"
    ];
    let words = listWords.filter((item) =>
      item.toString().toLowerCase().includes(searching.toLowerCase())
    );
  
    let type = words.length > 0 ? "category" : "name";

    let ENDPOINT;

    if(search === '?price=max'){
      ENDPOINT = `api/sort?price=max`;
    }else if(search === '?price=min'){
      ENDPOINT = `api/sort?price=min`;
    }
    else if (search && !expReg.test(search)) {
      ENDPOINT = `api/search${search}`;
    }else if (search && expReg.test(search) && price) {
      ENDPOINT = `api/term?${type}=${searching}&price=${price}`;
    }
     else if (search && expReg.test(search)) {
      ENDPOINT = `api/term?${type}=${searching}`;
    } else {
      ENDPOINT = "api/products";
    }
    
    const res = await fetch(`https://game-store-application.herokuapp.com/${ENDPOINT}`);

    const data = await res.json();
  
    dispatch(setProductList(data));
  };
};
