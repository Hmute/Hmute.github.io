import React, { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../services/api';
import StudentItem from './StudentItem';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStudents = async () => {
            try {
                const data = await fetchStudents();
                setStudents(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getStudents();
    }, []);

    const handleDelete = async (studentID) => {
        try {
            await deleteStudent(studentID);
            setStudents(students.filter(student => student.StudentId !== studentID));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Student List</h2>
            <div className="student-list">
            {students.map((student, index) => (
                <StudentItem 
                    key={student.StudentId ?? index} 
                    student={student} 
                    onDelete={handleDelete} 
                />
            ))}
            </div>
        </div>
    );
};

export default StudentList;
