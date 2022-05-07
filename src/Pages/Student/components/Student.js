import React from 'react';
import '../../../App.css'

export default function Student ({ student }) {
    return (
        <div className='studentDiv'>
            Imię i nazwisko: <div className='studentName'>{student.name} {student.surname}</div> <br />
            Tagi: <div className='studentTags'>{student.tags.join(' ')}</div>  <br />
            Przedmioty: <div className='studentSubjects'>{student.subjects.join(' ')}</div>  <br />
            Opis: <div className='studentDescription'>{student.description}</div>
        </div>
    );
}