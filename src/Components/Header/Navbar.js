
import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import websiteLogo from './../../Assets/Images/blogLogo.png';
import { useState } from 'react';
import { UserContext } from '../../Context/UserContext';




function Navbar() {

    const [query, setQuery] = useState('');
    const { username } = useContext(UserContext);


    const handleSearch = () => {
        const response = fetch(`/blog?search=${query}`)
        const data = response.json;
    }


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    // navbar navbar-expand-sm position-fixed w-100 ps-2 pe-5
    // navLogo for img

    return (
        <>
            <nav class="navbar navbar-expand-lg position-fixed">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={websiteLogo} alt="Logo" className="nav-logo" />
                    </Link>

                    <button className="navbar-toggler me-3 custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="custom-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ms-4" id="navbarNav">
                        <ul className="navbar-nav me-auto mt-2 mt-xxl-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class='nav-link' to="/Blog">Blog</Link>
                            </li>
                        </ul>

                        {username ? <Link class='navLogin' to="/UserPanel"><i class="fa fa-user"></i>{username}</Link> : ''}

                        <form>
                            <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className='formInput' />
                            <button type="button" onClick={handleSearch} className='formBtn'><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;