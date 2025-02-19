import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Card(props) {
    

    return (
        <>
            <div className='col-lg-4 col-sm-12'>
                <div className="card ">
                    <img src={props.imgsrc} className="card-img-top h-16" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
