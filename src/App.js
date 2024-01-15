import React, {useState} from 'react';
import './App.css';
import Student from './Components/Student';
import StudentList from './Components/StudentList';

function App() {
  const [studentsList, setStudentList] = useState([])

  // const getLocalItem = () => {
  //   let list = localStorage.getItem('list')
  //   if(list){
  //     return JSON.parse(localStorage.getItem('list'))
  //   }
  //   else{
  //     return []
  //   }
  // }

  const studentListHandler = (sName, sMarks) => {
    
    localStorage.setItem('list', JSON.stringify(studentsList))

    setStudentList((prevList)=>{
      return [...prevList, 
        {studentName: sName, 
          studentMarks: sMarks, 
          id: Math.random().toString()
        }]
    })
  }

  // localStorage.getItem(data.current.value)

  return (
    <div className="App">
      <Student onAdd={studentListHandler}/>
      <StudentList studs={studentsList}/>
    </div>
  );
}

export default App;
