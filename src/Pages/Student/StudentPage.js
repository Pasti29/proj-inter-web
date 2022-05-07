import React from 'react';
import '../../App.css'
import StudentNav from './StudentNav';
import AllStudentPage from './AllStudentPage';
import AddStudentPage from './AddStudentPage';
import { Route, Routes } from 'react-router-dom'

function StudentPage() {
  
  return (
      <div>
        <StudentNav />
        <Routes>
          <Route path='/' exact element={ <AllStudentPage />} />
          <Route path='/add' exact element={ <AddStudentPage />} />
        </Routes>
      </div>
  );
}

export default StudentPage;
