import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (productId, size) => {

    if (!size) {
        toast.error('Select Product Size');
        return; 
    }

    let cartData = structuredClone(cartItems);

    if (cartData[productId]) {
      if (cartData[productId][size]) {
        cartData[productId][size] += 1;
      } else {
        cartData[productId][size] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount=()=>{
    let totalCount=0

    for(const items in cartItems){            
        for(const item in cartItems[items]){                    
            try {
                if(cartItems[items][item]>0){
                  
                    totalCount +=cartItems[items][item];
                }
            } catch (error) {
                
            }
        }
    }
    return totalCount;

  }


  const getCartAmount = () => {
  let totalAmount = 0;

  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => product._id === itemId);

    if (!itemInfo) continue;

    for (const item in cartItems[itemId]) {
      const quantity = cartItems[itemId][item];

      if (quantity > 0 && !isNaN(itemInfo.price)) {
        totalAmount += itemInfo.price * quantity;
      }
    }
  }

  return totalAmount;
};

  const updateQuantity=async(itemsId,size,quantity)=>{
    let cartData=structuredClone(cartItems)
    cartData[itemsId][size]=quantity
    setCartItems(cartData)
  }

  useEffect(() => {
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
