import axios from 'axios';

// ACTION TYPES

const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const NEW_STUDENT = 'NEW_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS

export function getStudent (student) {
  return {
    type: GET_STUDENT,
    student
  }
}

export function getStudents (students) {
  return {
    type: GET_STUDENTS,
    students
  }
}

export function newStudent (student) {
  return {
    type: NEW_STUDENT,
    student
  }
}

export function deleteStudent (studentId) {
  return {
    type: DELETE_STUDENT,
    studentId
  }
}

// THUNK CREATORS

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        console.log(students);
        dispatch(getStudents(students));
      });
  };
}

export function createStudent (student) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(createdStudent => {
        dispatch(newStudent(createdStudent))
      });
  };
}

export function removeStudent (studentId) {
  return function thunk (dispatch) {
    console.log(studentId);
    return axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(deletedStudent => {
        dispatch(deleteStudent(deletedStudent))
      });
  };
}

// REDUCER

const studentReducer = function(state = [], action) {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;
    case GET_STUDENTS:
      return [...action.students];
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId);
    case NEW_STUDENT:
      return
    default: return state
  }
};

// DEFAULT EXPORT

export default studentReducer
