import { combineReducers } from 'redux'
import campusReducer from './campuses.jsx';
import studentReducer from './students.jsx';

// const initialState = {}

const rootReducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer
});

export default rootReducer
