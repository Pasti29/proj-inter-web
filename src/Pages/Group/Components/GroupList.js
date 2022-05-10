import React from "react";
import '../../../App.css'
import Group from './Group'

const GroupList = (props) => {

        return (
            props.data.map(group => {
                return <Group key={group.id} group={group} />;
            })
        );
}

export default GroupList