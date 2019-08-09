import React, {useState, useEffect} from 'react'
import classes from '../../App.css'

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
        <div className={classes.content}>
            <h4 className={classes.middleHeaderStyle}>UseEffect example</h4>
            <h4 className={classes.middleHeaderStyle}> X coordinat is - {x}</h4>
            <h4 className={classes.middleHeaderStyle}> Y coordinat is - {y}</h4>
        </div>
    )
}

export default HookMouse
