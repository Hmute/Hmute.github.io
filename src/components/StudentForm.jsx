import React, { useState, useEffect } from 'react';
import { addStudent, updateStudent } from '../services/api';

const StudentForm = ({ student, onSubmitSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [school, setSchool] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (student) {
            setFirstName(student.FirstName || '');
            setLastName(student.LastName || '');
            setSchool(student.School || '');
        }
    }, [student]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            if (student) {
                await updateStudent({ StudentId: student.StudentId, FirstName: firstName, LastName: lastName, School: school });
            } else {
                await addStudent({ FirstName: firstName, LastName: lastName, School: school });
            }
            onSubmitSuccess();
            clearForm();
        } catch (error) {
            console.error("Error submitting form:", error);
            setError(error.message);
        }
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setSchool('');
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div>
                <label>School:</label>
                <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} required />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit" className="button">{student ? 'Update Student' : 'Add Student'}</button>
        </form>
    );
};

export default StudentForm;