import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Common(props) {

    const web = 'https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-10 mx-auto'>
                        <div className='col-10 mx-auto d-flex justify-content-between align-items-center'>
                            <div className='col-md-6 pt-5 mt-5 pt-lg-0 col-lg-0 order-2 order-lg-1'>
                                <h1>
                                    {props.name} <br />
                                    <strong className='text-primary'> Bilash Mohakash</strong>
                                </h1>
                                <p className='text-muted'>This is Amazing Web SiteMohakash Bangla</p>
                                <div>
                                    <NavLink to={props.visit} className='btn btn-outline-primary rounded-pill px-5'>{props.btnname}</NavLink>
                                </div>
                            </div>
                            <div id='header' className='col-lg-6 mt-5 order-2 order-lg-2 header-img'>
                                <img src={props.imgsrc} alt="img pai ni" className='img-fluid animated rounded-pill' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
