import * as React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <nav className="border border-dark shadow row justify-content-around py-2">
        <Link to= '/'className="btn btn-info">Home</Link>
        <Link to= '/add' className="btn btn-info">Add</Link>
        </nav>
    )

}

export default NavBar;