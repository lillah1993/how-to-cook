import React from 'react';
import './homepage.style.scss';
import Header from '../../components/header/header.component';
import List from '../../components/list/list.component';

const HomePage = () => (
    <div className='homepage'>
        <Header/>
        <List />
    </div>
);

export default HomePage;