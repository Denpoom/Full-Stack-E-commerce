import React, { Suspense } from 'react';
import CartList from '../../Components/CartList';
import Checkout from '../../Components/Checkout';

const Cart = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>  
                <CartList/>
                <Checkout/>
            </Suspense>
        </React.Fragment>
    )
}
export default Cart



