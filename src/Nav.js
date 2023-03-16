import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.clear();
        navigate('/signup')
    }


    return (
        <div>
                <img src="https://yt3.googleusercontent.com/ytc/AL5GRJWWTjIY5ck502yavPpkWCCrGoPuhaHAhUrMUYVrBg=s900-c-k-c0x00ffffff-no-rj" alt="" className="logo" />

            {auth ?  <ul className="nav-ul" >                
            
                    <li><Link to="/">products</Link></li>
                    <li><Link to="/add">Add products</Link></li>
                    <li><Link to="/update">Update products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={Logout} to="/signup">logout ( {JSON.parse(auth).name} ) </Link></li>
                </ul>
                :
                <ul className="nav-ul nav-right" >
                    <li><Link to="/signup">Signup</Link> </li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;