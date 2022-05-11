import React from 'react';
import '../../App.css'
import StudentNav from './StudentNav';
import AllStudentPage from './AllStudentPage';
import AddStudentPage from './AddStudentPage';
import { Route, Routes } from 'react-router-dom'

function StudentPage({ students, setStudents }) {
  
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
