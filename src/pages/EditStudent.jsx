import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import { getStudent } from '../services/api';

const EditStudent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                console.log('Fetching student with ID:', id);
                const data = await getStudent(id);
                console.log('Student data received:', data);
                setStudent(data);
            } catch (err) {
                console.error('Error fetching student:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    const handleSubmitSuccess = () => {
        history.push('/');
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!student) return <div>Student not found</div>;

    return (
        <div className="container">
            <h2>Edit Student</h2>
            <StudentForm student={student} onSubmitSuccess={handleSubmitSuccess} />
        </div>
    );
};

export default EditStudent;
