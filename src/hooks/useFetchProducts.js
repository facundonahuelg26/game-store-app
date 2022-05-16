import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../store/slices/cart";

export const  useFetchProducts = (search = null,searching = null, params = null) => {
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(fetchAllProducts(search, searching, params));
    }, [dispatch, search, searching, params]);
}