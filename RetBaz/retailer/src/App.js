import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home_container from "./containers/home_container";
import Expand from "./components/ExpandedCard/ExpandedCard";
import ProductDetail from "./components/ProductDetail/details";
import Dashboard from "./containers/dashboard_container";
import AddProduct from "./components/addProducts/addProducts";
function App() {
  return (
    <div id='app'>
    
   {/* <Home_container /> */}
           {/* <ProductDetail />
           <Dashboard /> */}
{/* <Expand /> */} 
<AddProduct />

    </div>
  );
}

export default App;
