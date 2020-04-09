// state hook with object

import React, {useState} from 'react'

function HookCounterTree() {

    const [name, setName] = useState({firstName:'', lastName:''})

    return (
        <div>
            <from>
                {/* (...) is known as spread operator it's feature of es6 if u don't use this then value dont update into object here name object so use it.   */}
                <input type="text"
                value = {name.firstName}
                onChange= {e=>setName({...name, firstName: e.target.value})}
                />

                <input type="text"
                value = {name.lastName}
                onChange= {e=>setName({...name, lastName: e.target.value})}
                />

                <h2> First Name: {name.firstName}</h2>
                <h2> Last Name: {name.lastName}</h2>
            </from>
            
        </div>
    )
}

export default HookCounterTree
