import React, {useState, useEffect} from 'react'
import classes from '../../App.css'

function HookCounter(props) {
    useState();
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState('');
    const incrementFive = () => {
        setCount(prevCount => prevCount + 5)
    };

    // called useEffect after render component
    useEffect(() => {
        console.log('state was changed');
        props.changeTitle();
    }, [count]);


    return (
        <div className={classes.content}>
            <h4> React Hooks <br/> useState count Example</h4>
            <hr/>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <div className={classes.round}>
                {count}
            </div>
            <div className='d-flex align-items-center'>
                <button className={classes.btnStyle} onClick={() => setCount(count - 1)}> Decrement</button>
                <button className={classes.btnStyle} onClick={() => setCount(initialCount)}> Reset</button>
                <button className={classes.btnStyle} onClick={() => setCount(count + 1)}> Increment</button>
                <br/>
                <button className={classes.btnStyle} onClick={incrementFive}> Increment five</button>
            </div>
        </div>
    )
}

export default HookCounter
