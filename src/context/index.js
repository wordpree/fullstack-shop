import React from "react";
import action from "./action";

const initialValue = {
  inputValue: "",
  category: "all",
  price: "",
  freeShipping: false,
  company: "all",
  color: "all",
  reset: false,
};

const ProductFilter = React.createContext(initialValue);

const reducer = (state, action) => {
  switch (action) {
    case "":
      break;

    default:
      break;
  }
};

const Provider = ({ children, ...rest }) => {
  const [state, dispatch] = React.useReducer(reducer, initialValue);

  return (
    <ProductFilter.Provider value={[state, dispatch]} {...rest}>
      {children}
    </ProductFilter.Provider>
  );
};

const useProductFilter = () => React.useContext(ProductFilter);

const filterBySearch = (dispatch, inputValue) =>
  dispatch({ type: action.input, payload: inputValue });

const filterByCompany = (dispatch, value) =>
  dispatch({ type: action.company, payload: value });

const filterByColor = (dispatch, value) =>
  dispatch({ type: action.color, payload: value });

const filterByPrice = (dispatch, value) =>
  dispatch({ type: action.price, payload: value });

const filterByCate = (dispatch, value) =>
  dispatch({ type: action.category, payload: value });

const filterByFreeShipping = (dispatch, value) =>
  dispatch({ type: action.shipping, payload: value });

const filterByReset = (dispatch) => dispatch({ type: action.reset });

export {
  useProductFilter,
  Provider,
  filterBySearch,
  filterByCompany,
  filterByColor,
  filterByPrice,
  filterByCate,
  filterByFreeShipping,
  filterByReset,
};
