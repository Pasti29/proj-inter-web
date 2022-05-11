import React from 'react';
import '../../App.css'
import GroupNav from './GroupNav';
import AllGroupPage from './AllGroupPage';
import AddGroupPage from './AddGroupPage';
import { Route, Routes } from 'react-router-dom';

function GroupPage({ groups }) {

  return (
      <div>
        <GroupNav />
        <Routes>
          <Route  path='/' exact element={ <AllGroupPage data={groups} />}/>
          <Route  path='/add' exact element={ <AddGroupPage />}/>
        </Routes>
      </div>
  )
}

export default GroupPage;
