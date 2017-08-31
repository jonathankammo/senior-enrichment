import axios from 'axios';

// const initialState = {}

// ACTION TYPES

const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const NEW_CAMPUS = 'NEW_CAMPUS';

// ACTION CREATORS

export function getCampus (campus) {
  return {
    type: GET_CAMPUS,
    campus
  }
}

export function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export function newCampus (campus) {
  return {
    type: NEW_CAMPUS,
    campus
  }
}

// THUNK CREATORS

export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        console.log(campuses);
        dispatch(getCampuses(campuses));
      });
  };
}

export function createCampus (campus) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(createdCampus => {
        dispatch(newCampus(createdCampus))
      });
  };
}

// REDUCER

const campusReducer = function(state = [], action) {
  switch(action.type) {
    case GET_CAMPUS:
      return action.campus;
    case GET_CAMPUSES:
      return [...action.campuses]
    case NEW_CAMPUS:
      return
    default: return state
  }
};

// DEFAULT EXPORT

export default campusReducer
