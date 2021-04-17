import React, { Suspense } from 'react';
import Card from '../../Components/CardProducts';
import Section1 from '../../Components/Section1';
const Home = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>  
                <Section1/>
            </Suspense>
        </React.Fragment>
    )
}
export default Home



