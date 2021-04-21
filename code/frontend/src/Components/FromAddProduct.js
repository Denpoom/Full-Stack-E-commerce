import React from "react";

const FormaddProduct = () => {

    return (
        //form 
        <section className="#">
            <div className="font-sans">
                <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                    <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                <i class="fas fa-user-cog"></i> Create Product
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
                                    <form className="text-center">
                                    <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-full px-3">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                                Product Name
                                                </label>
                                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                        </div>
                                        <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                    DisplayScreen
                                                </label>
                                                <input type="firstname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                            <div className="md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                                Processor
                                                </label>
                                                <input type="lastname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                        </div>
                                        
                                        <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                Graphics
                                                </label>
                                                <input type="phone" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                Storage
                                                </label>
                                                <input type="phone" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                        </div>
                                        <div className="-mx-3 md:flex mb-">
                                            <div className="md:w-1/2 px-2 mb-6 md:mb-1">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                                Memory
                                                </label>
                                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                            <div className="md:w-1/2 px-1">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                                                    img
                                                </label>
                                                <div className="relative">
                                                <input className=" border-2 border-gray-100 focus:outline-none  block w-full py-2 px-4 rounded-lg focus:border-gray-700 " type="file" id="myfile" name="myfile"/>
                                                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-10">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                                    Price
                                                </label>
                                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                            <div className="px-10">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                                Count
                                                </label>
                                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
                                            </div>
                                        </div>
                                        <a href="">
                                            <button className="flex justify-center w-full px-10 py-2 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                                                Create Product
                                            </button>
                                        </a>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FormaddProduct