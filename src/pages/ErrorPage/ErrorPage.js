import React from 'react';
import './ErrorPage.css'
import error from '../../images/error.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="error">
            <img className="width-75" src={ error } alt="" /> <br />
            <Link className="btn-color" to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;