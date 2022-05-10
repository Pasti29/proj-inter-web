import React, { useEffect, useState } from 'react';
import '../../App.css'
import GroupNav from './GroupNav';
import AllGroupPage from './AllGroupPage';
import AddGroupPage from './AddGroupPage';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function GroupPage() {

  const [groups, setGroups] = useState([]);

  // useEffect(() => {
  //   axios.get('data/groups.json')
  //       .then(res => {
  //         console.log(groups);
  //         setGroups(res.data);
  //         console.log(groups);
  //       })
  // }, []);

  return (
      <div>
        <GroupNav />
        <Routes>
          <Route  path='/' exact element={ <AllGroupPage />}/>
          <Route  path='/add' exact element={ <AddGroupPage />}/>
        </Routes>
      </div>
  )
}

export default GroupPage;
