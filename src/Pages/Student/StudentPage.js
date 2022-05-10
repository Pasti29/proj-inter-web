import React, { useState, useEffect } from 'react';
import '../../App.css'
import StudentNav from './StudentNav';
import AllStudentPage from './AllStudentPage';
import AddStudentPage from './AddStudentPage';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';

function StudentPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('data/students.json')
      .then(res => setStudents(res.data));
    ;
  }, []);
  
  return (
      <div>
        <StudentNav />
        
        <Routes>
          <Route path='/' exact element={ <AllStudentPage students={students} />} />
          <Route path='/add' exact element={ <AddStudentPage setStudents={setStudents} />} />
        </Routes>
      </div>
  );
}

export default StudentPage;
