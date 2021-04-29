import React from "react";
import { Link } from "react-router-dom";

// Navber
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <div className="section font-semibold px-10 text-gray-800 fixed w-full top-0 flex header_section bg-gray-100 shadow z-10">
          <a className="h_btns cursor-pointer" href="/">
            <div className="sub_head flex my-auto py-2">
              <div className="logo w-10">
                <img
                  className="w-full"
                  src="https://icons-for-free.com/iconfiles/png/512/finance+payment+icon-1320186339191923550.png"
                  alt=""
                />
              </div>
              <div className="text ml-2 my-auto flex-none">E-Commerce</div>
            </div>
          </a>
          <div className="sub_head  flex space-x-6  ml-5 my-auto">
            <Link className="h_btns cursor-pointer" to="">
              Home
            </Link>
            <Link className="h_btns cursor-pointer" to="/product">
              Products
            </Link>
            <Link className="h_btns cursor-pointer" to="#">
              Promotion
            </Link>
            <Link className="h_btns cursor-pointer" to="/cart">
              Cart
            </Link>
          </div>
          <div className="sub_head ml-auto flex space-x-6 my-auto">
            <p className="ml-2 py-2 rounded text-black-700 font-bold hover:text-blue ">
              Username
            </p>

            <a
              href="/customer"
              className=" block text-md px-2  ml-2 py-2 rounded text-black-700 font-bold hover:text-blue "
            >
              <i class="fas fa-user-alt"></i>
            </a>
            {/* <a href="/login" class=" block text-md px-2  ml-2 py-2 rounded text-black-700 font-bold hover:text-white hover:bg-blue-700 lg:mt-0">login</a> */}
            <a
              href="/logout"
              className=" block text-md px-2  ml-2 py-2 rounded text-black-700 font-bold hover:text-white hover:bg-red-700 lg:mt-0"
            >
              logout
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
