import React from "react";

const AdminInfo = () => {
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
                                    <div class="col-md-4">                                
                                    <a href="/admin/dashboard">
                                    <button type="button" class="mt-4 px-6 py-4 btn button-admin">
                                    <i class="fas fa-user-cog"></i> Dashboard
                                    </button>
                                </a>
                                <br></br>                                                                  
                                <a href="/admin/product">
                                    <button type="button" class="mt-4 px-6 py-4 btn button-admin">
                                        <i class="fas fa-archive"></i> Manage Product
                                    </button>
                                </a>
                                <br></br>
                                <a href="/admin/promotion">
                                    <button type="button" class="mt-4 px-6 py-4 btn button-admin">
                                        <i class="fas fa-ad"></i> Manage Promotion
                                    </button>
                                </a> 
                                <br></br>
                                <a href="/admin/order">
                                    <button type="button" class="mt-4 px-6 py-4 btn button-admin">
                                        <i class="fas fa-list"></i> Manage Order
                                    </button>
                                </a> 
                                </div>
                                    <div class="mt-1 col-md-8">
                                        <div class="row">
                                            <div class="col-5 px-6 py-4 border rounded bg-blue-100 shadow-md"><span class="h3"><i class="fas fa-chart-pie"></i> จำนวนสินค้า</span><hr></hr><br></br> 10 ชิ้น </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div class="col-5 px-6 py-4 border rounded bg-green-100 shadow-md"><span class="h3"><i class="fas fa-list"></i> จำนวนออร์เดอร์</span><hr></hr><br></br> 10 ชิ้น </div>
                                        </div>
                                        <div class="mt-5 row">
                                            <div class="col-5 px-6 py-4 border rounded bg-red-100 shadow-md"><span class="h3">แก้เอา</span><hr></hr><br></br> 10 ชิ้น </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div class="col-5 px-6 py-4 border rounded bg-yellow-100 shadow-md"><span class="h3">แก้เอา</span><hr></hr><br></br> 10 ชิ้น </div>
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
export default AdminInfo