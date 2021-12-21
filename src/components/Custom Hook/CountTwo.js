import React, {useState} from 'react'
import useTitleHook from './useTitleHook'

function CountTwo() {

    const [count, setCount] = useState(0)

    useTitleHook(count)

    return (
        <div>
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default CountTwo
