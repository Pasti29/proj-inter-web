import React, { useState } from 'react';
import '../../App.css'
import StudentNav from './StudentNav';
import AllStudentPage from './AllStudentPage';
import AddStudentPage from './AddStudentPage';
import { Route, Routes } from 'react-router-dom'

function StudentPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Karol Pastewski',
      email: 'karolpastewski@mail.com',
      tags: ['ReactJS', 'JavaScript'],
      subjects: ['UCiSW2', 'PIW'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu urna, ultricies at tortor et, egestas vehicula justo. Mauris ut maximus ex, nec luctus nibh. Vivamus condimentum odio et sem euismod interdum et et lorem. Phasellus porttitor molestie tortor, ac sodales nisl tristique nec. In hac habitasse platea dictumst. Pellentesque eu facilisis ante. Duis blandit mi in risus cursus sagittis. Vestibulum lacinia sagittis orci malesuada volutpat.',
    },
    {
      id: 2,
      name: 'Ryszard Kowalski',
      email: 'ryszardKowalski@mail.com',
      tags: ['backend', 'c++'],
      subjects: ['Projekt Zespołowy'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu urna, ultricies at tortor et, egestas vehicula justo. Mauris ut maximus ex, nec luctus nibh. Vivamus condimentum odio et sem euismod interdum et et lorem. Phasellus porttitor molestie tortor, ac sodales nisl tristique nec. In hac habitasse platea dictumst. Pellentesque eu facilisis ante. Duis blandit mi in risus cursus sagittis. Vestibulum lacinia sagittis orci malesuada volutpat.',
    },
    {
      id: 3,
      name: 'Marta Sobczuk',
      email: 'martasobczuk@mail.com',
      tags: ['backend', 'python', 'machine learning'],
      subjects: ['RiPO'],
      description: 'Lorem dolor sit amet, consectetur adipiscing elit. Sed arcu urna, ultricies at tortor et, egestas vehicula justo. Mauris ut maximus ex, nec luctus nibh. Vivamus condimentum odio et sem euismod interdum et et lorem. Phasellus porttitor molestie tortor, ac sodales nisl tristique nec. In hac habitasse platea dictumst. Pellentesque eu facilisis ante. Duis blandit mi in risus cursus sagittis. Vestibulum lacinia sagittis orci malesuada volutpat.',
    }
  ]);
  
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
