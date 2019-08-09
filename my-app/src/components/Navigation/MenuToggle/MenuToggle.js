import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import classes from './MenuToggle.css'

library.add(faBars, faTimes);

const MenuToggle = (props) => {
    const cls = [classes.MenuToggle];
    if(props.isOpen){
        cls.push(classes['open'])
    }
    console.log(cls.join(' '));
    return (
        <div className={cls.join(' ')}>
            {props.isOpen ? <FontAwesomeIcon icon={faTimes} size="2x" onClick={props.toggleMenuHandler}/> : <FontAwesomeIcon icon={faBars} size="2x"  onClick={props.toggleMenuHandler}/>}
        </div>
    )
}

export default MenuToggle
