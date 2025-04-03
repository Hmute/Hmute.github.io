import React from 'react';
import { useHistory } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

const AddStudent = () => {
    const history = useHistory();
    
    const handleSubmitSuccess = () => {
        history.push('/');
    };

    return (
        <div className="container">
            <h1>Add New Student</h1>
            <StudentForm onSubmitSuccess={handleSubmitSuccess} />
        </div>
    );
};

export default AddStudent;