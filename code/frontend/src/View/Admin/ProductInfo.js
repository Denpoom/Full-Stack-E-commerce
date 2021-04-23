import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import { Link,} from 'react-router-dom';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import List from '../../Components/ListAdmin'


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 350 },
    {
        field: 'price',
        headerName: 'price',
        type: 'number',
        width: 150,
    },
    {
        field: 'amount',
        headerName: 'amount',
        type: 'number',
        width: 150,
    },
    
];
const rows = [
    { id: 1,  name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000, amount: 15 },
    { id: 2,  name: 'Notebook Acer Aspire A515-44G-R67L/T003',price: 15000 , amount: 15},
    { id: 3,  name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000 , amount: 15},
    { id: 4,  name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000, amount: 15 },
    { id: 5, name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000, amount: 15 },
    { id: 6,  name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000 , amount: 15},
    { id: 7, name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000 , amount: 15},
    { id: 8, name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000, amount: 15},
    { id: 9, name: 'Notebook Acer Aspire A515-44G-R67L/T003', price: 15000 , amount: 15},
];


const ProductInfo = () => {
    return (
        //form 
        <section className="#">
            <div className="font-sans">
                <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                    <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                <i class="fas fa-user-cog"></i> Admin Dasboard
                                </h1>
                            <hr></hr>

                            <div class="ml-2 mt-4 row text-left">
                                <List/>
                                <div class="mt-1 col-md-8">
                                    <div class="h2"><i class="fas fa-archive"></i> Manage Product<br></br></div>
                                    <div class="row">
                                        <div class="col-11 px-6 py-4 border rounded bg-gray-100 shadow-md">

                                            <div style={{ height: 400, width: '100%' }}>
                                                <DataGrid rows={rows} columns={columns} pageSize={5}  />
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div class="mt-5 row">
                                    <Link to="/admin/product/create">
                                        <button  type="button" class="col-11 px-6 py-4 btn button-admin">
                                            <i class="fas fa-plus-circle"></i> Create Product
                                        </button>
                                    </Link>
                                    <Link to="/admin/product/update">
                                            <button type="button" class="mt-2 col-11 px-6 py-4 btn button-admin">
                                                <i class="fas fa-sync-alt"></i> Click for update product !!
                                                </button>
                                    </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductInfo