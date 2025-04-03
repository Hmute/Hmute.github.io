import React from 'react';
import StudentList from '../components/StudentList';

const Home = () => {
    return (
        <div className="container">
            <h1>Student Management</h1>
            <StudentList />
        </div>
    );
};

export default Home;