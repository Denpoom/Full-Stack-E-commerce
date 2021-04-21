import React, { Suspense } from 'react';
import FromAddProduct from '../../Components/FromAddProduct';

const AddProduct = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>  
                <FromAddProduct/>
            </Suspense>
        </React.Fragment>
    )
}
export default AddProduct



