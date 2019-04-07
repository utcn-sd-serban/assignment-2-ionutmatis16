import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";


const MyNavbar = ({ searchBar, loggedInAsButton, logoutButton, sOUsername }) => (
    <nav className="navbar navbar-dark fixed-top myNavbar">
        <div className="navbar-header">
            <Link class="navbar-brand navbar-light" to="/">
                <img src="https://i.ibb.co/khjjsKD/slackoverflow.png" width="129" height="30" alt="" />
            </Link>
        </div>

        <ul className="navbar-nav nav mr-auto">
            <li class="nav-item">
                <Link class="nav-link" style={{ "color": "#f7f9fb" }} to="/questions">
                    <strong>Home</strong></Link>
            </li>
        </ul>

        {
            searchBar === true ?
                <form class="nav form-inline mr-auto">
                    <input class="form-control mr-sm-2 search-input mySearch" type="search" placeholder="Search..." />
                    <button class="btn myButton btn-search my-2 my-sm-0 " type="submit">
                        Title
                    </button>
                </form>
                :
                <div></div>
        }

        {
            (loggedInAsButton === true) ? <div id="loggedIn">Logged in as <a href="/" style={{ "color": "#31708e" }}>
                <strong> {sOUsername} </strong></a> </div> : <div></div>
        }

        {
            (logoutButton === true) ? <button href="/" className="btn nav-item myButton"> Logout </button> : <div></div>
        }


    </nav>
);



export default MyNavbar;