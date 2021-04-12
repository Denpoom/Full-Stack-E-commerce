import React, { Suspense } from 'react';
import Card from '../../Components/Card';
import Section1 from '../../Components/Section1';
const Home = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>  
                <Card/>
            </Suspense>
        </React.Fragment>
    )
}
export default Home



