import React from "react";

const OrderList = () => {
    return (
         //form 
        <section className="#">
            <div className="font-sans">
                <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                    <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                <i class="fas fa-shopping-cart"></i> Orders
                                </h1>
                                <hr></hr>
                                <br></br>
                                <table class="table-fixed">
                                <thead>
                                    <tr className="bg-gray-200 max-w-sm">
                                    <th class="w-1/3"><h1 className="text-center"><i class="fas fa-shopping-cart"></i> รายการสั่งซื้อ</h1></th>
                                    <th class="w-1/5"><h1 className="text-center"><i class="fas fa-history"></i> วันที่ทำการสั่งซื้อ</h1></th>
                                    <th class="w-1/4"><h1 className="text-center"><i class="fas fa-money-bill"></i> สถานะ</h1></th>
                                    <th class="w-1/6"><h1 className="text-center"><i class="fas fa-info"></i> ดูรายละเอียดเพิ่มเติม</h1></th>
                                    </tr>
                                </thead>
                                <br></br>
                                <tbody>
                                    <tr>
                                    <td>Intro to CSS</td>
                                    <td>17/4/2021</td>
                                    <td className="text-green-500 font-semibold">Payment Successful</td>
                                    <td className="no-underline hover:underline"><a href="/">More Details</a></td>
                                    </tr>
                                    <br></br>
                                    <tr>
                                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                    <td>17/4/2021</td>
                                    <td className="text-red-500 font-semibold">Waiting Payment</td>
                                    <td className="no-underline hover:underline"><a href="/">More Details</a></td>
                                    </tr>
                                    <br></br>
                                    <tr>
                                    <td>Eieiza</td>
                                    <td>17/4/2021</td>
                                    <td className="text-red-500 font-semibold">Waiting Payment</td>
                                    <td className="no-underline hover:underline"><a href="/">More Details</a></td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OrderList