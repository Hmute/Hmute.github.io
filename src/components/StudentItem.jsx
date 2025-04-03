import React from 'react';
import { Link } from 'react-router-dom';

const StudentItem = ({ student, onDelete }) => {
    // Debug logging to see what data you're receiving
    //console.log('Student in StudentItem:', student);
    
    return (
        <div className="student-item">
            <div>
                <h3>{student.FirstName} {student.LastName}</h3>
                <p>School: {student.School}</p>
                <p><small>ID: {student.StudentId || 'Missing ID'}</small></p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                {student.StudentId ? (
                    <Link to={`/edit/${student.StudentId}`} className="button">Edit</Link>
                ) : (
                    <span className="button disabled">Edit</span>
                )}
                <button 
                    className="button" 
                    onClick={() => student.StudentId && onDelete(student.StudentId)}
                    disabled={!student.StudentId}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default StudentItem;