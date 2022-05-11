import React, { useRef } from "react";
import '../../App.css'

function AddStudentPage({ setStudents }) {

    const studentNameRef = useRef();
    const studentEmailRef = useRef();
    const studentTagsRef = useRef();
    const studentSubjectsRef = useRef();
    const studentDescriptionRef = useRef();

    function handleAddStudent(e) {
        const name = studentNameRef.current.value;
        const email = studentEmailRef.current.value;
        const tags = studentTagsRef.current.value.split(',');
        const subjects = studentSubjectsRef.current.value.split(',');
        const description = studentDescriptionRef.current.value;

        setStudents(prevStudents => {
            return [...prevStudents, {
                id: prevStudents.length + 1,
                name: name,
                email: email,
                tags: tags,
                subjects: subjects,
                description: description,
                photo: 'https://picsum.photos/70/100'
            }];
        });

        studentNameRef.current.value = null;
        studentEmailRef.current.value = null;
        studentTagsRef.current.value = null;
        studentSubjectsRef.current.value = null;
        studentDescriptionRef.current.value = null;
    }

    return (
        <div>
            <div className="filters">
                Imię i nazwisko: <input ref={studentNameRef} type="text" /> <br />
                E-mail: <input ref={studentEmailRef} type="text" /> <br />
                Tagi (oddzielone przecinkiem): <input ref={studentTagsRef} type="text" /> <br />
                Przedmioty (oddzielone przecinkiem): <input ref={studentSubjectsRef} type="text" /> <br />
                Opis: <textarea id="studentDescriptionRef" ref={studentDescriptionRef} type="text" /> <br />
                <button onClick={handleAddStudent}>Dodaj studenta</button>
            </div>
            
        </div>
    );
}

export default AddStudentPage;