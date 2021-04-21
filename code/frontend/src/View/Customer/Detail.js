import React, { Suspense } from 'react';
import DetailProduct from  '../../Components/DetailProduct';
import Card from  '../../Components/CardProducts';

const Detail = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>  
                <DetailProduct/>
<<<<<<< HEAD
=======
               
>>>>>>> cbeb370307546724608957ed405ab17c1c5f8ba0
            </Suspense>
        </React.Fragment>
    )
}
export default Detail



