import React, {useState} from 'react'
import classes from '../../App.css'

function HookCounter3(props) {
    useState();
    const [items, setItems] = useState([]);
    const addItem = ()=> {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) + 1
        }])
    }
    return (
            <div className={classes.content}>
                <h4 className={classes.middleHeaderStyle}> React Hooks <br/> useState array Example</h4>
                <hr/>
                <button className={classes.btnStyle} onClick={addItem} >Add Item</button>
                <ul>
                {
                    items.map( (item) => {
                        return <li key={item.id}> {item.value} </li>
                    })
                }
                </ul>
            </div>
    )
}

export default HookCounter3
