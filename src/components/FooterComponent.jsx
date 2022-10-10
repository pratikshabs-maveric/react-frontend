import React, { Component } from 'react';
import footerimg from '../images/footer-logo.png';
class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
           
        }
    }
    render() {
        return (
            <div>
                <footer className='footer'>
                <img src={footerimg} alt="footer-img" width="100" height="45" ></img>
                    <span>Copyright @2022 Maveric Systems India Pvt Ltd</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;