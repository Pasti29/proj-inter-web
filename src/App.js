import React, { useEffect, useMemo, useState } from 'react';
import './App.css'
import Nav from './Nav';
import StudentPage from './Pages/Student/StudentPage';
import GroupPage from './Pages/Group/GroupPage';
import { UserContext } from './UserContext';
import { UsersContext } from './UsersContext';
import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import LoginPage from './Pages/LoginPage';

import { auth } from './firebase/init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logout } from './firebase/auth';

function App() {

  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  const [userGoogle] = useAuthState(auth);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "karol",
      email: "karol@mail.com",
      password: "password"
    },
    {
      id: 2,
      username: "piotr",
      email: "piotr@mail.com",
      password: "password"
    }
  ]);
  const [user, setUser] = useState("");

  const providerUser = useMemo(() =>({ user, setUser }), [user, setUser]);

  useEffect(() => {
    axios.get('data/students.json')
      .then(res => {
        for (let i = 0; i < res.data.students.length; i++) {
          axios.get('https://picsum.photos/70/100')
            .then(photoRes => {
              res.data.students[i].photo = photoRes.request.responseURL;
            });
        }
        setStudents(res.data.students);
      });

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
        { userGoogle
        && <button onClick={logout}>Wyloguj {userGoogle.displayName}</button>
        || <NavLink to="/proj-inter-web/login" >Zaloguj</NavLink> }
        <UserContext.Provider value={providerUser}>
          <Nav />
        </UserContext.Provider>
        <UsersContext.Provider value={{ users, setUsers }}>
          <UserContext.Provider value={providerUser}>
            <Routes>
              <Route path='/*' exact element={ <StudentPage students={students} setStudents={setStudents} /> } />
              <Route path='/proj-inter-web' exact element={ <StudentPage students={students} setStudents={setStudents} /> } />
              <Route path='/proj-inter-web/student/*' exact element={ <StudentPage students={students} setStudents={setStudents} /> } />
              <Route path='/proj-inter-web/group/*' exact element={ <GroupPage groups={groups} /> } />
              <Route path='/proj-inter-web/register' exact element={ <RegisterPage /> } />
              <Route path='/proj-inter-web/login' exact element={ <LoginPage /> } />
            </Routes>
          </UserContext.Provider>
        </UsersContext.Provider>
      </div>
    </Router>
  );
}

export default App;
