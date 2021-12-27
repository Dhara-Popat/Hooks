import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {updateName, updateAge, fetchUser} from './redux/userReducer'

function Profile() {

    const {name, age} = useSelector((state) => state)

    const dispatch = useDispatch()

    const changeAge = (age) => {
        dispatch(updateAge(age))
    }

    const changeName = () => {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users')
        // const result = await res.json()
        dispatch(fetchUser())
    }

    return (
        <div>
            <h2> Name - {name} </h2>
            <h2> Age - {age} </h2>
            <button onClick={() => changeAge(40)}>Update age</button>
            <button onClick={() => changeName()}>Update Name</button>
        </div>
    )
}

export default Profile
