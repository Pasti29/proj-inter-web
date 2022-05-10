import React, { useEffect, useState } from 'react';
import '../../App.css'
import GroupList from "./Components/GroupList";
import axios from 'axios';

const AllGroupPage = () => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
      axios.get('data/groups.json')
          .then(res => {
            setGroups(res.data);
          })
          .catch(err => {
              console.log(err)
          })
    }, []);

    return (
        <div className='AllGroupPage'>
            <GroupList data={groups} />
        </div>
    );
}

export default AllGroupPage;