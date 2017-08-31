import axios from 'axios';

// ACTION TYPES

const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const NEW_STUDENT = 'NEW_STUDENT';

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

// REDUCER

const studentReducer = function(state = [], action) {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;
    case GET_STUDENTS:
      return [...action.students]
    case NEW_STUDENT:
      return
    default: return state
  }
};

// DEFAULT EXPORT

export default studentReducer
