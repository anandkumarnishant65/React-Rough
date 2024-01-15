import React, {useState,useEffect} from 'react';
import './App.css';
import Student from './Components/Student';
import StudentList from './Components/StudentList';

function App() {
  

  const getLocalItem = () => {
    let lists = localStorage.getItem('list')
    console.log(lists)
    if(lists){
      return JSON.parse(localStorage.getItem('list'))
    }
    else{
      return []
    }
  }

  const [myList, setMyList] = useState('')

  const [studentsList, setStudentList] = useState(getLocalItem())


  const studentListHandler = (sName, sMarks) => {
    if(myList){
    } else{
      setStudentList((prevList)=>{
        return [...prevList, 
          {studentName: sName, 
            studentMarks: sMarks, 
            id: Math.random().toString()
          }]
      })
      setMyList('')
    }
    
  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(studentsList))
  },[studentsList])

  return (
    <div className="App">
      <Student onAdd={studentListHandler}/>
      <StudentList studs={studentsList}/>
    </div>
  );
}

export default App;
