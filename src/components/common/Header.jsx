import React from 'react'
import './Header.css'
import { useHistory } from 'react-router-dom';

const Header = () => {

    

        const history = useHistory();
    
        const handleLoginClick = () => {
            history.push('/login');
        };

    return (
        <>
        <header>
        <div className='container flex'>
            <div className='logo'>
                <img src= './images/logo.png' alt='' />
            </div>
            <div className='title'>
                <h1>Find Your Dream Home</h1>
            </div>
            <div className='button flex'>
            <button className='btn1' onClick={handleLoginClick}>
                <i className='fa fa-sign-in'></i> Log In
            </button>
          </div>
            
        </div>
        </header>
        </>
        
    )
}
export default Header