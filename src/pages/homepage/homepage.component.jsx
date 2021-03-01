import React from 'react';
import './homepage.style.scss';
import Header from '../../components/header/header.component';
import List from '../../components/list/list.component';
import Recipe from '../../components/recipe/recipe.component';

const HomePage = () => (
    <div className='homepage'>
        <Header/>
        <List />
        <Recipe />

    </div>
);

export default HomePage;