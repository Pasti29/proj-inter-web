import React from "react";
import '../../App.css'
import GroupList from "./Components/GroupList";

class AllGroupPage extends React.Component {

    constructor (props) {
        super(props);
        this.groups = props.groups;
    }

    render () {
        return (
            <div className='AllGroupPage'>
                <GroupList groups={this.groups} />
            </div>
        );
    }
}

export default AllGroupPage;