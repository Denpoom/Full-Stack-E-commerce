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
const AsyncCustomerCart = Loadable({
  loader: () => import('./View/Purchase/Cart')
})
const AsyncCustomerCheckout = Loadable({
  loader: () => import('./View/Purchase/Checkout')
})
const AsyncAdminInfo = Loadable({
  loader: () => import('./View/Admin/AdminInfo')
})
const AsyncProductInfo = Loadable({
  loader: () => import('./View/Admin/ProductInfo')
})
const AsyncPromotionInfo = Loadable({
  loader: () => import('./View/Admin/PromotionInfo')
})
const AsyncOrderInfo = Loadable({
  loader: () => import('./View/Admin/OrderInfo')
})



const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename='/Home'>
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
            <Route path="/cart" exact component={AsyncCustomerCart} />
            <Route path="/checkout" exact component={AsyncCustomerCheckout} />
            <Route path="/admin" exact component={AsyncAdminInfo} />
            <Route path="/productadmin" exact component={AsyncProductInfo} />
            <Route path="/promotionadmin" exact component={AsyncPromotionInfo} />
            <Route path="/orderadmin" exact component={AsyncOrderInfo} />            
          </Switch>
        <Footer/>
        </div>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
