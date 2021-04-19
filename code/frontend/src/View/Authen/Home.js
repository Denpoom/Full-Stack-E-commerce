import React, { Suspense } from 'react';
import Card from '../../Components/CardProducts';
import Section1 from '../../Components/Section1';
import Section2 from '../../Components/Section2';
const Home = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>  
                <Section1/>
                <Card/>
                <Section2/>
            </Suspense>
        </React.Fragment>
    )
}
export default Home



