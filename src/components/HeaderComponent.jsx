import React, { Component } from 'react';
import headerimg from '../images/header-logo.png';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
            <div>
                <header>
                    <nav className='navbar shadow p-3 mb-5 bg-white'>
                        <img src={headerimg} alt="header-img" width="200" height="50" ></img>
                        <div>
                            <p className='navbar-brand'> Maveric Bank App</p>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;