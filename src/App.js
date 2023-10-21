import logo from './logo.svg';
import './App.css';
import React from'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Register from './Component/Register/Register';
import Layout from './Component/Layout/Layout';
import Login from './Component/Login/Login';
import { AuthProvider } from './Component/context/authen';
import Catigory from './Component/Catigory/Catigory';
import Products from './Component/Products/Products';
import Brands from './Component/Brands/Brands';
import ProtectedRoute from './Component/protectedRoute/protectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import { CartContextprovider } from './Component/context/CartContext';
import { Toaster } from 'react-hot-toast';
import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import Payment from './Component/Payment/Payment';
import AllOrders from './Component/AllOrders/AllOrders';
import { Offline } from 'react-detect-offline';




const router =createHashRouter([

  {path:"",element:<Layout/>, children:[
    {path:'' , element:<Products/>},
    {path:'Register' , element:<Register/>},
    {path:'Login' , element:<Login/>},
    {path:'Products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'Cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'Payment' , element:<ProtectedRoute><Payment/></ProtectedRoute>},
    {path:'Catigory' , element:<ProtectedRoute><Catigory/></ProtectedRoute>},
    {path:'allorders' , element:<ProtectedRoute><AllOrders/></ProtectedRoute>},
    {path:'Brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'Profile' , element:<ProtectedRoute><Profile/></ProtectedRoute>},
    {path:'ProductDetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'*' , element: <div >
      <h1>Not Found</h1>
    </div>},
  ]}
  
  
  ])



function App() {
  let queryClint=new QueryClient();
  return <>
  


  <QueryClientProvider client={queryClint }> 
  <CartContextprovider>
  <AuthProvider>
  <RouterProvider    router={router}/>
  </AuthProvider>
  <Toaster/>
  </CartContextprovider>
  </QueryClientProvider>
 <Offline>
  <div className=' position-fixed bottom-0 start-0 bg-danger text-white p-3 rounded-3 m-3'>
Opps.. you are offline.
  </div>
 </Offline>
  
  </>
    
  
}
export default App;
