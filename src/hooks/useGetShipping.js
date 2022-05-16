import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getShipping } from "../store";

export const useGetShipping = (userId) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShipping(userId));
    }, [dispatch,userId]);

}