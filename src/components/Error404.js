import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/images/error.png';

function Error404(){
    return(
        <>
        <div className="grid-block main-content wrap regular-padding">
        <div className="grid-content small-12" style={{marginTop:"200px"}}>
            <div style={{ textAlign:"center"}}>
                <img style={{marginBottom:"0.5rem"}} src={image} alt="error"/>
                <h3>404 page not found</h3>
                <p>This page does not exist.</p>
                <Link to="/">
                    Volver a la página principal
                </Link>
            </div>
        </div>
    </div>
        </>
    )
}
export default Error404;