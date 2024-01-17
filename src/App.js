import React, {useState,useEffect} from 'react';
import './App.css';
import Student from './Components/Student';
// import StudentList from './Components/StudentList';

function App() {
  

  const getLocalItem = () => {
    let lists = localStorage.getItem('list')
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

  const deleteItem = (id) => {
    let items = JSON.parse(localStorage.getItem('list'));
    const filtered = items.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(filtered))
    setStudentList(filtered)
}

  return (
    <div className="App">
      <Student onAdd={studentListHandler}/>
      {/* <StudentList studs={studentsList}/> */}

      <ul>
            {studentsList.map((user) => (
                <li key={user.id}>
                    {user.studentName} {user.studentMarks}
                    <button onClick={()=>deleteItem(user.id)}>Delete</button>
                </li>
            ))}
            
        </ul>
    </div>
  );
}

export default App;
