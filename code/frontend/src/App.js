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
            <Route path="/orders" exact component={AsyncCustomerOrders} />
          </Switch>
        <Footer/>
        </div>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
