import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './shopping-ls.style.scss';

const Shopping = ({shoplist}) => (
    <div className="shopping-ls">
        <span>My shopping list</span>
        <div className="main-ls">
            {
                shoplist?shoplist.map(({text})=> (<div className="element" key={uuidv4()}>{text}</div>)):
                null
            }
        </div>
    </div>
);



export default Shopping;