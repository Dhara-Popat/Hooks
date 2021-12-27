// import { createReducer, createSlice } from "@reduxjs/toolkit"
// import { createStoreHook } from "react-redux"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    name: 'UserName',
    age: 21
}

export const fetchUser = createAsyncThunk(
    'fetchuser',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        return result[Math.floor(Math.random()*11)].name
    }
)


const userReducer = createSlice({
    name: 'person',
    initialState, // key-value same
    reducers: {
        updateName(state, action) {
            state.name = action.payload
        },
        updateAge(state, action) {
            state.age = action.payload
        },

    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            // state.entities.push(action.payload)
            state.name = action.payload
        },
        [fetchUser.rejected]: (state, action) => {
            // state.entities.push(action.payload)
            state.name = 'try again'
        }
    }
})

export const { updateName, updateAge } = userReducer.actions
export default userReducer.reducer



// export default(state = initialState, action) => {
//     if(action.type == 'UPDATE_AGE'){
//         return{
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
// }

// export default createReducer(initialState, (builder) => {
//     builder.addCase('UPDATE_AGE', (state, action) => {
//         state.age = action.payload
//     })
//     builder.addCase(updateName, (state, action) => {
//         state.name = action.payload
//     })
// })