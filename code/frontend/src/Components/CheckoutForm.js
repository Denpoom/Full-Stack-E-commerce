import React from "react";

const CheckoutForm = () => {
    return (
        //form 
        <section className="#">
            <div className="font-sans">
                <div className="relative mt-8 flex flex-col  items-center">
                    <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 text-gray-800"> Checkout Form</h1>
                            <div className="row flex justify-center">
                            {/* <div className="col-2 ">sdf</div> */}
                                <div className="col-6 ">
                                    <form className="text-center">

                                        <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                    First Name
                                                </label>
                                                <input type="firstname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="firstname" />
                                            </div>
                                            <div className="md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input type="lastname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="lastname" />
                                            </div>
                                        </div>
                                        <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-full px-3">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                                    E-mail
                                                </label>
                                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="email" />
                                            </div>
                                        </div>
                                        <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                    Phone
                                                </label>
                                                <input type="phone" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="phone" />
                                            </div>
                                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                    Credit card
                                                </label>
                                                <input type="phone" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="XXXX-XXXX-XXXX-XXXX" />
                                            </div>
                                        </div>
                                        <div className="-mx-3 md:flex mb-">
                                            <div className="md:w-1/2 px-2 mb-6 md:mb-1">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                                    CITY
                                                </label>
                                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Bangkok" />
                                            </div>
                                            <div className="md:w-1/2 px-1">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                                                    STATE
                                                </label>
                                                <div className="relative">
                                                    <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Thailand" />

                                                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-10">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                                    CVV
                                                </label>
                                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="XXX" />
                                            </div>
                                            <div className="px-10">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                                    ZIP
                                                </label>
                                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="XXXXX" />
                                            </div>
                                        </div>
                                        <a href="">
                                            <button className="flex justify-center w-full px-10 py-2 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                                                <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                                                <span class="ml-2 mt-5px">Continue to Checkout</span>
                                            </button>
                                        </a>
                                    </form>

                                </div>
                                {/* <div class="col-2 ">sdf</div> */}

                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
export default CheckoutForm