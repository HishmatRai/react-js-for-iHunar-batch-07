import React from "react";
import { Link, useNavigate } from 'react-router-dom'
const Navbar = (props) => {
    console.log("props >>>>", props)
    let navigate = useNavigate();
    return (
        <div>
            {/* <h1>A tag</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <hr />
            <h1>Link tag</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <hr />
            <button onClick={() => window.location.assign("/")}>Home</button>
            <button onClick={() => window.location.assign("/about")}>About</button>
            <button onClick={() => window.location.assign("/contact")}>Contact</button>
            <hr /> */}
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
            {props.isProfileShow &&
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9ySx6w03MteA7LmBWIqr5C7rhqOdC8xY2SLkoAN03bMZfXmTVpRmcH3ewSR_pFpxqJM&usqp=CAU" height={50} />}
        </div>
    )
}
export default Navbar