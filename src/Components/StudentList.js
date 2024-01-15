import React from "react";
import Card from "./Card";

const StudentList = (props) => {
    return (
        <Card>
            <ul>
            {props.studs.map((user) => (
                <li key={user.id}>
                    {user.studentName} {user.studentMarks}
                </li>
            ))}
        </ul>
        </Card>
    )
}

export default StudentList