import React, {useState} from 'react'

function HookCounter2(props) {
    useState();
    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
            <div className='content'>
                <h4> React Hooks <br/> useState object Example</h4>
                <hr/>
                <label htmlFor='fn'> First name: </label> <br/>
                <input type='text' id='fn' value={name.firstName} onChange={e => setName({...name,  firstName: e.target.value})}/> <br/>
                <label htmlFor='ln'> Last name: </label> <br/>
                <input type='text' id='ln' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
                <h4>First name is :  {name.firstName}</h4>
                <h4>Last name is : {name.lastName}</h4>
            </div>
    )
}

export default HookCounter2
