import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFood_list] = useState([])
    const url = "https://ecommerce-app-back-end.onrender.com";


    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + '/api/cart/remove', { itemId }, { headers: { token } })
            console.log('token clicked');
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItem[item]

            }
        }
        return totalAmount;
    }
    const fetchFoodList = async () => {
        const response = await axios.get(url + '/api/food/list');
        // console.log("response ====> ", response);
        setFood_list(response.data.data);
    }
    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItem(response.data.cartData);
    }
    useEffect(() => {

        async function loadData() {
            await fetchFoodList();

            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem('token'));
                await loadCartData(localStorage.getItem('token'))
            }
        }
        loadData();
    }, [])
    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
