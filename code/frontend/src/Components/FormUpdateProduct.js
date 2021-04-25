import React from "react";
import { Link,} from 'react-router-dom';
const FormUpdateProduct = () => {

    return (
        //form 
        
            <div class="mt-1 col-md-8">
                                    <form className="text-center">
                                    <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-full px-3">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                                Product Name
                                                </label>
                                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="" />
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
                                        <Link to="">
                                            <button className="flex justify-center w-full px-10 py-2 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                                                Update Product
                                            </button>
                                        </Link>
                                    </form>

                                </div>
       
    )
}
export default FormUpdateProduct