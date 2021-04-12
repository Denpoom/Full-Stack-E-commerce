import React from "react";

// Navber Admin
const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-fixed-top" >
                <div className="section font-semibold px-10 text-gray-800 fixed w-full top-0 flex header_section bg-gray-100 shadow z-10">
                    <div className="sub_head flex my-auto py-2">
                        <div className="logo w-10"><img className="w-full" src="https://icons-for-free.com/iconfiles/png/512/finance+payment+icon-1320186339191923550.png" alt="" /></div>
                        <div className="text ml-2 my-auto flex-none">E-Commerce</div>
                    </div>
                    <div className="sub_head ml-auto flex space-x-6 my-auto">
                        <a className="h_btns cursor-pointer" href="/">Home</a>
                        <a className="h_btns cursor-pointer" href="/product">Products</a>
                        <a className="h_btns cursor-pointer" href="#">Order</a>
                        <a className="h_btns cursor-pointer" href="#">Promotion</a>
                        <a className="h_btns cursor-pointer" href="#">Dashboard</a>
                    </div>
                </div>

            </nav>
        </React.Fragment>
    );
};

export default Navbar
//   <div className="container-fluid">
//                 <a className="navbar-brand" href="#">E-Commerce</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Dashboard </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Promotion</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Product </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Orders </a>
//                         </li>  
//                     </ul> 
//                 </div>
//                 <div className="form-inline my-3 my-lg-0">
//                 <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
//                 <button className="btn btn-outline-light my-2 my-sm-0 m-2" type="submit">Logout</button>
//                 </div>
//             </div>