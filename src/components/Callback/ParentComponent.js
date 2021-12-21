import React, {useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    
    //without Callback hooks it will render all 
    // const incrementAge = () => {
    //     setAge(age + 1)
    // }

    // const incrementSalary = () => {
    //     setSalary(salary + 1000)
    // }

    /* 
    Callback hook accepts two arguments.
      1.arrow function
      2.dependancy List in []
    */

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text="Age" count = {age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text = "Salary" count = {salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
