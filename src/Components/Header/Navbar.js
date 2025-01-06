
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



    return (
        <>
            <nav class="navbar navbar-expand-sm position-fixed w-100 ps-2 pe-5">
                <div class="container-fluid">
                    <Link class="navbar-brand navLogo" to="/"><img src={websiteLogo} alt='logo' /></Link>

                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class='navLink' to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class='navLink' to="/About">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class='navLink' to="/Contact">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class='navLink' to="/Blog">Blog</Link>
                            </li>
                        </ul>

                        {username ? <Link class='navLogin' to="/UserPanel"><i class="fa fa-user"></i> {username}</Link> : ''}


                        <form>
                            <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
                            <button type="button" onClick={handleSearch}><i class="fa fa-search"></i></button>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;