import React from 'react';
import '../../../App.css';

export default function Student ({ student }) {
    return (
        <div className='componentDiv'>
            <img src={student.photo} alt="Brak" /> <br />
            <b>Imię i nazwisko: </b><div className='studentName'>{student.name} {student.surname}</div> <br />
            <b>Tagi: </b><div className='studentTags'>{student.tags.join(' ')}</div>  <br />
            <b>Przedmioty: </b><div className='studentSubjects'>{student.subjects.join(' ')}</div>  <br />
            <b>Opis: </b><div className='studentDescription'>{student.description}</div>
        </div>
    );
}