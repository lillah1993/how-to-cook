import React from 'react';
import './search.style.scss';
import {ReactComponent as Logo } from '../../img/SVG/magnifying-glass.svg'


const Search = () => (
    <div className='search'>
        <input className='searchInput' type='text' placeholder=' type your search' />
        <button>
          <Logo className='glass'/>
          <span>Search</span>
        </button>
    </div> 
);

 export default Search;