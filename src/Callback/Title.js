import React from 'react'

function Title() {
    console.log('Rendering Title');
    return (
        <div>
            useCallback hook
        </div>
    )
}

export default React.memo(Title)
