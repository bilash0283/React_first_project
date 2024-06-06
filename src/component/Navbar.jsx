import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className='container-fluid navbar-light bg-light'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='text-center'>
                            <nav className="navbar navbar-expand-lg">
                                <NavLink className="navbar-brand font-bold" to="/">Bilash Mohakash</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto">
                                        <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
                                        <NavLink className="nav-item nav-link " to="/about">About</NavLink>
                                        <NavLink className="nav-item nav-link " to="/contact">Contact</NavLink>
                                        <NavLink className="nav-item nav-link " to="/service">Service</NavLink>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
