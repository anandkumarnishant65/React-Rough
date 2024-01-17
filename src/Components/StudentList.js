import React,{useState} from "react";
import Card from "./Card";

const StudentList = (props) => {
    
    const deleteItem = (id) => {
        let items = JSON.parse(localStorage.getItem('list'));
        const filtered = items.filter(item => item.id !== id);
        localStorage.setItem('list', JSON.stringify(filtered))
        
    }

    return (
        <Card>
            <ul>
            {props.studs.map((user) => (
                <li key={user.id}>
                    {user.studentName} {user.studentMarks}
                    <button onClick={()=>deleteItem(user.id)}>Delete</button>
                </li>
            ))}
            
        </ul>
        </Card>
    )
}

export default StudentList