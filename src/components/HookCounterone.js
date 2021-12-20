import React, {useState, useEffect} from 'react'

function HookCounterone() {

    const [count, setCount] = useState(0)

    //useEffect also a function it has two arguments.
    // useEffect(function, [state value])
    //useEffect() runs after every render
    //useEfect() call after every single render.

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterone
