import React, { useState } from "react";
import '../../App.css'
import StudentList from './components/StudentList'

function AllStudentPage() {
    const [students, setStudents] = useState([
        {
          id: 1,
          name: 'Karol Pastewski',
          email: 'karolpastewski@mail.com',
          tags: ['ReactJS', 'JavaScript'],
          subjects: ['UCiSW2', 'PIW'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu urna, ultricies at tortor et, egestas vehicula justo. Mauris ut maximus ex, nec luctus nibh. Vivamus condimentum odio et sem euismod interdum et et lorem. Phasellus porttitor molestie tortor, ac sodales nisl tristique nec. In hac habitasse platea dictumst. Pellentesque eu facilisis ante. Duis blandit mi in risus cursus sagittis. Vestibulum lacinia sagittis orci malesuada volutpat.',
        },
        {
          id: 2,
          name: 'Ryszard Kowalski',
          email: 'ryszardKowalski@mail.com',
          tags: ['backend', 'c++'],
          subjects: ['Projekt Zespołowy'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu urna, ultricies at tortor et, egestas vehicula justo. Mauris ut maximus ex, nec luctus nibh. Vivamus condimentum odio et sem euismod interdum et et lorem. Phasellus porttitor molestie tortor, ac sodales nisl tristique nec. In hac habitasse platea dictumst. Pellentesque eu facilisis ante. Duis blandit mi in risus cursus sagittis. Vestibulum lacinia sagittis orci malesuada volutpat.',
        },
        {
          id: 3,
          name: 'Marta Sobczuk',
          email: 'martasobczuk@mail.com',
          tags: ['backend', 'python', 'machine learning'],
          subjects: ['RiPO'],
          description: 'Lorem dolor sit amet, consectetur adipiscing elit. Sed arcu urna, ultricies at tortor et, egestas vehicula justo. Mauris ut maximus ex, nec luctus nibh. Vivamus condimentum odio et sem euismod interdum et et lorem. Phasellus porttitor molestie tortor, ac sodales nisl tristique nec. In hac habitasse platea dictumst. Pellentesque eu facilisis ante. Duis blandit mi in risus cursus sagittis. Vestibulum lacinia sagittis orci malesuada volutpat.',
        }
      ]);

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