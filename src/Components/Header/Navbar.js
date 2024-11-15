
import React from 'react';
import './Navbar.css';




function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-sm navbar-dark p-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)"><img src=''></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)">About US</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                        </ul>
                        <form>
                            <input type="text" placeholder="Search..."/>
                            <button type="button"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default Navbar;