import React from "react";


const Navbar = () => {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Commerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dashboard </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Promotion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Orders </a>
                        </li>
                        
                    </ul>
                    
                </div>
                <div className="form-inline my-3 my-lg-0">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
                <button className="btn btn-outline-light my-2 my-sm-0 m-2" type="submit">Logout</button>
                </div>
            </div>
        </nav>
        </React.Fragment>
    );
  };
  
  export default Navbar