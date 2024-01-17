import React, {useState} from 'react'
import Card from './Card';

const Student = (props) => {
    const [name, setName] = useState('');
    const [marks, setMarks] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const marksChangeHandler = (event) => {
        setMarks(event.target.value)
    }

    const studentHandler = (event) => {
        event.preventDefault();
        console.log(name,marks)
        props.onAdd(name, marks)
        setName('')
        setMarks('')
    }
    return(
        <Card>
            <div>
            <form onSubmit={studentHandler}>
            <label>Student</label>
            <input type='text' onChange={nameChangeHandler} required></input>
            <label>Marks</label>
            <input type='number' onChange={marksChangeHandler} required></input>
            <button type='submit'>Add</button>
        </form>
        
        </div>
        </Card>
    )
}
export default Student