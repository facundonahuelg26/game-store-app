import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [values, setValues] = useState("");
  const [searching, setSearching] = useState("");

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setValues(e.target.value) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearching(values)
    navigate(`/products?term=${values}`);
    setValues("")
  }
  const contextValue = {
    searching,
    values,
    handleChange,
    handleSubmit
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
