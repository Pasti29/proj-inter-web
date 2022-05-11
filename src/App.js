import React, { useEffect, useState } from 'react';
import './App.css'
import Nav from './Nav';
import StudentPage from './Pages/Student/StudentPage';
import GroupPage from './Pages/Group/GroupPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios';

function App() {

  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('data/students.json')
      .then(res => setStudents(res.data));
    ;
    axios.get('data/groups.json')
         .then(res => {
                setGroups(res.data);
              })
         .catch(err => {
                console.log(err)
              })
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' exact element={ <StudentPage students={students} setStudents={setStudents} /> } />
          <Route path='/proj-inter-web' exact element={ <StudentPage students={students} setStudents={setStudents} /> } />
          <Route path='/proj-inter-web/student/*' exact element={ <StudentPage students={students} setStudents={setStudents} /> } />
          <Route path='/proj-inter-web/group/*' exact element={ <GroupPage groups={groups} /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
