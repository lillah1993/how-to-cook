import React ,{useState} from 'react';
import './search.style.scss';
import {ReactComponent as Logo } from '../../img/SVG/magnifying-glass.svg';
import getData from './fetchContent.js';

import { connect } from 'react-redux';

import { setCurrentList } from '../../redux/list/list.actions';
import { setCurrentRecipe} from '../../redux/recipe/recipe.actions';
import { setCurrentShopList } from '../../redux/shop-list/shop-list.actions';


const Search = ({setCurrentList,setCurrentRecipe,setCurrentShopList}) => {
  const [search, setSearch] = useState('');
  const searchChange =(e) => {
    setSearch(e.target.value);
  }
  return ( 
      <div className='search'>
        <input className='searchInput' type='text' placeholder=' type your search' onChange={searchChange} value={search} />
        <button onClick={()=>{getData(search,setSearch).then(res =>setCurrentList(res));
                                                                   setCurrentRecipe();
                                                                   setCurrentShopList()}}>
          <Logo className='glass'/>
          <span>Search</span>
        </button>
      </div> 
    )
};

const mapDispatchToProps = dispatch => ({
  setCurrentList : list => dispatch(setCurrentList(list)),
  setCurrentRecipe: () =>dispatch(setCurrentRecipe()),
  setCurrentShopList: () =>dispatch(setCurrentShopList())
});

 export default connect(null,mapDispatchToProps)(Search);