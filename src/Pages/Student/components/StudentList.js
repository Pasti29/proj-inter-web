import React from 'react';
import '../../../App.css'
import Student from './Student'

export default function StudentList({ students }) {
    return (
        students.map(student => {
            return <Student student={student} />;
        })
    );
}