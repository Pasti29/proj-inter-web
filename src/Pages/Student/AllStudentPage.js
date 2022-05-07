import React, { useState } from "react";
import '../../App.css'
import StudentList from './components/StudentList'

function AllStudentPage({ students }) {


      const [filterName, setFilterName] = useState('');
      const [filterTags, setFilterTags] = useState('');
      const [filterSubjects, setFilterSubjects] = useState('');
      const [filterDescription, setFilterDescription] = useState('');    

    return (
        <div className='AllStudentPage'>
            <div className="filters">
                Imię i nazwisko:<input id='filterName' name='filterName' type="text" value={filterName} onChange={event => setFilterName(event.target.value)} /> <br />
                Tagi: <input id='filterTags' name='filterTags' type="text" value={filterTags} onChange={event => setFilterTags(event.target.value)} /> <br />
                Przedmioty: <input id='filterSubjects' name='filterSubjects' type="text" value={filterSubjects} onChange={event => setFilterSubjects(event.target.value)} /> <br />
                Opis: <input id='filterDescription' name='filterDescription' type="text" value={filterDescription} onChange={event => setFilterDescription(event.target.value)} /> <br />
            </div>
        
            <StudentList students={students.filter(s => s.name.includes(filterName) || filterName === '')
                                    .filter(s => s.tags.some(data => data.includes(filterTags)) || filterTags === '')
                                    .filter(s => s.subjects.some(data => data.includes(filterSubjects)) || filterSubjects === '')
                                    .filter(s => s.description.includes(filterDescription) || filterDescription === '')
            } />
        </div>
    );
}

export default AllStudentPage;