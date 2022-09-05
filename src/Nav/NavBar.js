import React from 'react'
import './NavBar.css';

function NavBar() {
    return (
        <div className='nav'>
            <div className='navMain'>
                <div className='navLeft'>
                    <h1 className='navText'>Zero</h1>
                </div>
                <div className='navRight'>
                    <h2 className='signin'>SIGN IN</h2>
                    <h2 className='signin'>SIGN UP</h2>
                    <h2 className='signin'>Icon</h2>
                    <h2 className='signin'>Icon</h2>
                </div>
            </div>
            <hr></hr>
        </div>

    )
}

export default NavBar