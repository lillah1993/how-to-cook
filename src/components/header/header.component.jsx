import React from 'react';
import Search from '../search/search.component';
import './header.style.scss';
import {ReactComponent as Logo } from '../../img/SVG/spoon-knife.svg'
import {ReactComponent as Like } from '../../img/SVG/heart.svg'



const Header = () => (
    <div className='header'>
        <div className="main-logo">
            <div className='spoon-knife'>
                {/* <span> HOW-TO-COOK </span> */}
                <Logo className='logo'/>
            
            </div>
            <span>HOW-TO-COOK</span>
        </div>
        
        <Search/>
        {/* <div className="icon">
            <Like className='heart'/>
        </div> */}
        <Like className='heart'/>
    </div>
);

export default Header;