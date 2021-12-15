import React from 'react';

import './homepage.style.scss';

import Header from '../../components/header/header.component';
import List from '../../components/list/list.component';
import Shopping from '../../components/shopping-ls/shopping-ls.component';
import Recipe from '../../components/recipe/recipe.component';

import { connect } from 'react-redux';




const HomePage = ({currentList,currentRecipe,currentShopList}) => (
    <div className='homepage'>
        <Header/>
        <List list={currentList}/>
        { currentRecipe?
            <Recipe recipe={currentRecipe}/>
          :null
        }
        {
            <Shopping shoplist={currentShopList}/>
        }
        
    </div>
);

const mapStateToProps = state => ({
    currentList: state.list.currentList,
    currentRecipe: state.recipe.currentRecipe,
    currentShopList: state.shoplist.currentShopList
});

export default connect(mapStateToProps)(HomePage);