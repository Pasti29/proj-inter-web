import React from 'react';
import './App.css'
import Nav from './Nav';
import StudentPage from './Pages/Student/StudentPage';
import GroupPage from './Pages/Group/GroupPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/proj-inter-web/' exact element={ <StudentPage /> } />
          <Route path='/proj-inter-web//student/*' exact element={ <StudentPage /> } />
          <Route path='/proj-inter-web//group/*' exact element={ <GroupPage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
