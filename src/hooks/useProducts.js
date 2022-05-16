import { useContext } from "react"
import { ProductContext } from "../context/products/ProductContext"

export const useProducts = () => {
    const contextValue = useContext(ProductContext)

    return contextValue;
}