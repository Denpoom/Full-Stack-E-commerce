import React, { Suspense } from 'react';
import Admin from '../../Components/Admin';

const AdminInfo = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>  
                <Admin/>
            </Suspense>
        </React.Fragment>
    )
}
export default AdminInfo



