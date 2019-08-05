import React, {useState, useEffect} from 'react'

function HookMouse(props) {
    useState();
    const [x, setX] = useState('');
    const [y, setY] = useState('')

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);

        return (() => {
            // console.log('component will unmount');
            window.removeEventListener('mousemove', logMousePosition);
        })
    });

    return (
        <div className='content'>
            <h1>UseEffect example</h1>
            <h4> X coordinat is - {x}</h4>
            <h4> Y coordinat is - {y}</h4>
        </div>
    )
}

export default HookMouse
