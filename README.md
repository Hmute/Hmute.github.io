# Student Management App

This is a React application for managing students. It allows users to perform CRUD (Create, Read, Update, Delete) operations on student records using an Azure Functions API.

## Features

- List all students
- Add a new student
- Edit existing student details
- Delete a student

## Project Structure

```
student-management-app
├── public
│   ├── index.html          # Main HTML file for the React application
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components          # Contains reusable components
│   │   ├── StudentList.jsx # Component to display the list of students
│   │   ├── StudentForm.jsx # Component for adding and updating student information
│   │   ├── StudentItem.jsx # Component representing a single student
│   │   └── NavBar.jsx      # Navigation bar component
│   ├── services            # Contains API service functions
│   │   └── api.js         # Functions for making API calls to the Azure Functions API
│   ├── pages               # Contains page components
│   │   ├── Home.jsx       # Landing page displaying the student list
│   │   ├── AddStudent.jsx  # Page for adding a new student
│   │   └── EditStudent.jsx # Page for editing an existing student
│   ├── App.jsx             # Main component setting up routing
│   ├── index.jsx           # Entry point of the application
│   └── styles              # Contains CSS styles
│       └── index.css       # Styles for the application
├── package.json            # Configuration file for npm
├── .env                    # Environment variables
└── README.md               # Documentation for the project
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd student-management-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in the `.env` file. For example:
   ```
   REACT_APP_API_URL=<your-azure-functions-api-url>
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

The application interacts with the following Azure Functions API endpoints:

- `GET /api/students` - Retrieve the list of students
- `POST /api/students` - Add a new student
- `PUT /api/students` - Update an existing student
- `DELETE /api/students/{id}` - Delete a student

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License.