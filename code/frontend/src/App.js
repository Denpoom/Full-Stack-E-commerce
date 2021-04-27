import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import L from 'react-loadable'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import HomePage  from '../src/View/Authen/Home';
import LoginPage from '../src/View/Authen/Login';
import RegisterPage from '../src/View/Authen/Register'
import ProductPage from '../src/View/Product/Product'
import CustomerPage from '../src/View/Customer/Customer'
import OrderPage from '../src/View/Customer/Orders'
import DetailPage from '../src/View/Customer/Detail'
import CartPage from '../src/View/Purchase/Cart'
import CheckoutPage from '../src/View/Purchase/Checkout'
import PaymentPage from '../src/View/Purchase/Payment'
import DasboardPage from '../src/View/Admin/DasboardInfo'
import AdminOrderPage from '../src/View/Admin/OrderInfo'
import AdminProductPage from '../src/View/Admin/ProductInfo'
import AdminPromotionPage from '../src/View/Admin/PromotionInfo'
import AdminAddProductPage from '../src/View/Admin/AddProduct'
import AdminUpdateProductPage from '../src/View/Admin/UpdateProduct'
import AdminDetailOrderPage from '../src/View/Admin/DetailOrder'
const Loading = () => <div>Loading...</div>

const Loadable = (opts) => L({
  loading: Loading,
  ...opts
})

// const AsyncHome = Loadable({
//   loader: () => import('./View/Authen/Home')
// })
// const AsyncLogin = Loadable({
//   loader: () => import('./View/Authen/Login')
// })
// const AsyncRegister = Loadable({
//   loader: () => import('./View/Authen/Register')
// })
// const AsyncProduct = Loadable({
//   loader: () => import('./View/Product/Product')
// })
// const AsyncCustomer = Loadable({
//   loader: () => import('./View/Customer/Customer')
// })
// const AsyncCustomerOrders = Loadable({
//   loader: () => import('./View/Customer/Orders')
// })
// const AsyncCustomerDetail = Loadable({
//   loader: () => import('./View/Customer/Detail')
// })
// const AsyncCart = Loadable({
//   loader: () => import('./View/Purchase/Cart')
// })
// const AsyncCheckout = Loadable({
//   loader: () => import('./View/Purchase/Checkout')
// })
// const AsyncPayment = Loadable({
//   loader: () => import('./View/Purchase/Payment')
// })
// //ไม่ต้องทำแบบนี้ก็ได้ มันไม่ได้โหลดมาทีเดียว
// const AsyncAdmin = Loadable({
//   loader: () => import('./View/Admin/DasboardInfo')
// })
// const AsyncAdminOrder = Loadable({
//   loader: () => import('./View/Admin/OrderInfo')
// })
// const AsyncAdminPromotion = Loadable({
//   loader: () => import('./View/Admin/PromotionInfo')
// })
// const AsyncAdminProduct = Loadable({
//   loader: () => import('./View/Admin/ProductInfo')
// })
// const AsyncAdminAddProduct = Loadable({
//   loader: () => import('./View/Admin/AddProduct')
// })
// const AsyncAdminUpdateProduct = Loadable({
//   loader: () => import('./View/Admin/UpdateProduct')
// })
// const AsyncAdminDetailOrder = Loadable({
//   loader: () => import('./View/Admin/DetailOrder')
// })

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename='/'>
        <div className="App">
        <Navbar/>
          <Switch>
            <Route exact={true} path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/customer" exact component={CustomerPage} />
            <Route path="/customer/orders" exact component={OrderPage} />
            <Route path="/product/detail/:id_product" exact component={DetailPage} />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route path="/payment" exact component={PaymentPage} />

            <Route path="/admin/" exact component={DasboardPage} />
            <Route path="/admin/dashboard" exact component={DasboardPage} />
            <Route path="/admin/order" exact component={AdminOrderPage} />
            <Route path="/admin/promotion" exact component={AdminPromotionPage} />
            <Route path="/admin/product" exact component={AdminProductPage} />
            <Route path="/admin/product/create" exact component={AdminAddProductPage} />
            <Route path="/admin/product/update/:id_product" exact component={AdminUpdateProductPage} />
            <Route path="/admin/order/id_order" exact component={AdminDetailOrderPage} />
            
          </Switch>
        <Footer/>
        </div>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
