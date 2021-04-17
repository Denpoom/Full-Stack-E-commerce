import React from "react";

const CartList = () => {
    return (
        //form 
        <section className="#">
            <div className="font-sans">
                <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                    <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                <i class="fas fa-shopping-cart"></i> Cart
                                </h1>
                            
                            <table class="w-full text-sm lg:text-base" cellspacing="0">
                                <thead>
                                    <tr class="h-12 uppercase">
                                        <th class="text-left">Product</th>
                                        <th class="lg:text-right text-left pl-5 lg:pl-0">
                                            <span class="hidden lg:inline">Quantity</span>
                                        </th>
                                        <th class="hidden text-right md:table-cell">Unit price</th>
                                        <th class="text-right">Total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>  
                                        <td>
                                            <a href="/product/detail">
                                                <p class=" text-left ">Earphone</p>
                                            </a>
                                                <p type="submit" class="text-left text-danger"> <small>(Remove item)</small>
                </p>   
                                            
                                        </td>
                                        <td class="justify-center md:justify-end md:flex mt-6">
                                            <div class="w-20 h-10">
                                                <div class="relative flex flex-row w-full h-8">
                                                    <input type="number" value="3"
                                                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                                </div>
                                            </div>
                                        </td>
                                        <td class="hidden text-right md:table-cell">
                                            <span class="text-sm lg:text-base font-medium">
                                                10.00€
                                            </span>
                                        </td>
                                        <td class="text-right">
                                            <span class="text-sm lg:text-base font-medium">
                                                30.00€
                                            </span>
                                        </td>   
                                    </tr>
                                    <tr>  
                                        <td>
                                        <a href="/product/detail">
                                                <p class=" text-left ">IPhone</p>
                                            </a>
                                                <p type="submit" class="text-left text-danger"> <small>(Remove item)</small>
                </p>   
                                        </td>
                                        <td class="justify-center md:justify-end md:flex mt-6">
                                            <div class="w-20 h-10">
                                                <div class="relative flex flex-row w-full h-8">
                                                    <input type="number" value="1"
                                                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                                </div>
                                            </div>
                                        </td>
                                        <td class="hidden text-right md:table-cell">
                                            <span class="text-sm lg:text-base font-medium">
                                                30.00€
                                            </span>
                                        </td>
                                        <td class="text-right">
                                            <span class="text-sm lg:text-base font-medium">
                                                30.00€
                                            </span>
                                        </td>   
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
export default CartList