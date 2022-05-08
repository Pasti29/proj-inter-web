import React from "react";
import '../../../App.css'
import Group from './Group'

class GroupList extends React.Component {

    constructor (props) {
        super(props);
        this.groups = props.groups;
    };

    render () {
        return (
            this.groups.groups.map(group => {
                return <Group key={group.id} group={group} />;
            })
        );
    };
}

export default GroupList