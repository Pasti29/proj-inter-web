import React from 'react';
import '../../App.css'
import GroupList from "./Components/GroupList";

const AllGroupPage = (props) => {

    return (
        <div className='AllGroupPage'>
            <GroupList data={props.data} />
        </div>
    );
}

export default AllGroupPage;