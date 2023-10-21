
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';






export const cartContext = createContext();

export function CartContextprovider({children}) {

    const [cartProducts, setCartProducts] = useState([])
    const [totalcartPrice, setTotalCartPrice] = useState(null)
    const [numOfCartItems, setNumOfCartItems] = useState(null)
    const [cartID, setCartID] = useState(null)

   async function addProductToCart(productId){
try{
    const {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{
    "productId":productId
},
{
headers:{token:localStorage.getItem("tkn")}
});
getUserCart()
return data
}
catch(error){
    console.log("error",error);
}
    }

async function getUserCart(){
   try {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{token:localStorage.getItem("tkn")}
    })
    setCartProducts(data.data.products)
    setTotalCartPrice(data.data.totalCartPrice)
    setNumOfCartItems(data.numOfCartItems)  
    setCartID(data.data._id)   
} catch (error) {
    console.log("error",error)
   }
}
async function deleteCartProduct(productId){
   try {
    const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers:{token:localStorage.getItem("tkn")}
    })
setCartProducts(data.data.products)
setTotalCartPrice(data.data.totalCartPrice)
setNumOfCartItems(data.numOfCartItems)   
return data;
} catch (error) {
    console.log("error",error)
   }
}
async function removeCartData(){
    try {
     const {data} = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
         headers:{token:localStorage.getItem("tkn")}
     })
 setCartProducts([])
 setTotalCartPrice(0)
 setNumOfCartItems(0)   
 } catch (error) {
     console.log("error",error)
    }
 }

async function updateCount(productId, count) {
    const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {"count":count},
    {headers:{token:localStorage.getItem("tkn")}}
    )
    setCartProducts(data.data.products)
setTotalCartPrice(data.data.totalCartPrice)
setNumOfCartItems(data.numOfCartItems) 
    return data;
}
 
useEffect(() => {
    getUserCart()
    setNumOfCartItems(0)
}, [])



return<cartContext.Provider value={{
getUserCart,
removeCartData,
updateCount,
deleteCartProduct,
addProductToCart,
cartProducts,
totalcartPrice,
cartID,
setCartProducts,
setTotalCartPrice,
setNumOfCartItems,
numOfCartItems}}>
{children}
</cartContext.Provider>
}
