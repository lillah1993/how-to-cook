import React from 'react';
import {v4 as uuidv4} from 'uuid';
import ListElement from '../list-element.component';
import './list.style.scss';




const List = ({list,setCurrentRecipe}) => (
    <div className="list">
        <div className="recepies" >
            {
                list.map(({recipe})=>(<ListElement key={uuidv4()} recipe={recipe} />))
            }
        </div>
        <div className="pages"></div>
    </div>
);



export default List;