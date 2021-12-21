import {useEffect} from 'react'

function useTitleHook(count) {

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    }, [count])
}

export default useTitleHook
