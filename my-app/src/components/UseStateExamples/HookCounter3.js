import React, {useState} from 'react'
import './styles.css'

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
            <div className='content'>
                <button className="btn-style" onClick={addItem} >Add Item</button>
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
