import React, { Component } from 'react';
import { fetchCampuses } from '../reducers/campuses.jsx';
import { fetchStudents } from '../reducers/students.jsx';
import CampusList from './Campuses.jsx';
import StudentList from './Students.jsx';
import store from '../store.jsx';

/* eslint-disable class-methods-use-this */
export default class Root extends Component {

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <CampusList />
        <StudentList />
      </div>
    )
  }
}
