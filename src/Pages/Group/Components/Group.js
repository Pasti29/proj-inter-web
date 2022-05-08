import React from "react";
import '../../../App.css';

class Group extends React.Component {
    constructor  (props) {
        super(props);
        this.group = props.group;
    }

    render() {
        return (
            <div className='componentDiv'>
                <b>Nazwa grupy: </b><div className='groupName'>{this.group.name}</div> <br />
                <b>Członkowie: </b><div className='groupMembers'>{this.group.members.join(', ')}</div>
                <b>Tagi: </b><div className='groupTags'>{this.group.tags.join(' ')}</div>  <br />
                <b>Przedmiot: </b><div className='groupSubject'>{this.group.subject}</div>  <br />
                <b>Opis: </b><div className='groupDescription'>{this.group.description}</div>
            </div>
        )
    }
}

export default Group;