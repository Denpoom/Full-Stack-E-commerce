import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import L from 'react-loadable'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
const Loading = () => <div>Loading...</div>

const Loadable = (opts) => L({
  loading: Loading,
  ...opts
})

const AsyncHome = Loadable({
  loader: () => import('./View/Authen/Home')
})
const AsyncLogin = Loadable({
  loader: () => import('./View/Authen/Login')
})
const AsyncRegister = Loadable({
  loader: () => import('./View/Authen/Register')
})
const AsyncProduct = Loadable({
  loader: () => import('./View/Product/Product')
})
const AsyncCustomer = Loadable({
  loader: () => import('./View/Customer/Customer')
})
const AsyncCustomerOrders = Loadable({
  loader: () => import('./View/Customer/Orders')
})
const AsyncCustomerDetail = Loadable({
  loader: () => import('./View/Customer/Detail')
})
const AsyncCart = Loadable({
  loader: () => import('./View/Purchase/Cart')
})
const AsyncCheckout = Loadable({
  loader: () => import('./View/Purchase/Checkout')
})
const AsyncPayment = Loadable({
  loader: () => import('./View/Purchase/Payment')
})
//ไม่ต้องทำแบบนี้ก็ได้ มันไม่ได้โหลดมาทีเดียว
const AsyncAdmin = Loadable({
  loader: () => import('./View/Admin/AdminInfo')
})
const AsyncAdminOrder = Loadable({
  loader: () => import('./View/Admin/OrderInfo')
})
const AsyncAdminPromotion = Loadable({
  loader: () => import('./View/Admin/PromotionInfo')
})
const AsyncAdminProduct = Loadable({
  loader: () => import('./View/Admin/ProductInfo')
})
const AsyncAdminAddProduct = Loadable({
  loader: () => import('./View/Admin/AddProduct')
})
const AsyncAdminUpdateProduct = Loadable({
  loader: () => import('./View/Admin/UpdateProduct')
})

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename='/'>
        <div className="App">
        <Navbar/>
          <Switch>
            <Route exact={true} path="/" exact component={AsyncHome} />
            <Route path="/login" exact component={AsyncLogin} />
            <Route path="/register" exact component={AsyncRegister} />
            <Route path="/product" exact component={AsyncProduct} />
            <Route path="/customer" exact component={AsyncCustomer} />
            <Route path="/customer/orders" exact component={AsyncCustomerOrders} />
            <Route path="/product/detail/:id_product" exact component={AsyncCustomerDetail} />
            <Route path="/cart" exact component={AsyncCart} />
            <Route path="/checkout" exact component={AsyncCheckout} />
            <Route path="/payment" exact component={AsyncPayment} />
            <Route path="/admin/dashboard" exact component={AsyncAdmin} />
            <Route path="/admin/" exact component={AsyncAdmin} />
            <Route path="/admin/order" exact component={AsyncAdminOrder} />
            <Route path="/admin/promotion" exact component={AsyncAdminPromotion} />
            <Route path="/admin/product" exact component={AsyncAdminProduct} />
            <Route path="/admin/product/create" exact component={AsyncAdminAddProduct} />
            <Route path="/admin/product/update" exact component={AsyncAdminUpdateProduct} />
          </Switch>
        <Footer/>
        </div>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
