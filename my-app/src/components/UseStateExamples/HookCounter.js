import React, {useState, useEffect} from 'react'

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
        <div className='content'>
            <h4> React Hooks <br/> useState count Example</h4>
            <hr/>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <div className='round'>
                {count}
            </div>
            <div className='d-flex align-items-center'>
                <button className="btn-style" onClick={() => setCount(count - 1)}> Decrement</button>
                <button className="btn-style" onClick={() => setCount(initialCount)}> Reset</button>
                <button className="btn-style" onClick={() => setCount(count + 1)}> Increment</button>
                <br/>
                <button className="btn-style" onClick={incrementFive}> Increment five</button>
            </div>
        </div>
    )
}

export default HookCounter
