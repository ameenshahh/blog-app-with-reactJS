import React from 'react'
import './Style.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li> <a href="#">Posts</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="search">
                {/* <img src="../../Assets/Icons/search.png" /> */}
                <input type="text" placeholder="Search" />
            </div>

        </div >
    )
}

export default Navbar





