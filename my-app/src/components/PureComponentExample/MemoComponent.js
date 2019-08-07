import React from 'react'

function MemoComponent({name}) {
    console.log('memo component')
    return (
        <div className='content'>
            <h4>MEMO component {name}</h4>
            <hr/>
        </div>
    )
}

export default React.memo(MemoComponent)
