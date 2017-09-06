import React, { Component } from 'react';
import { fetchCampuses } from '../reducers/campuses.jsx';
import { fetchStudents } from '../reducers/students.jsx';
import CampusList from './Campuses.jsx';
import StudentList from './Students.jsx';
import Campus from './Campus.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Options from './Options.jsx';
import store from '../store.jsx';
import { Route, Redirect, Switch } from 'react-router-dom';

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
        <Navbar />
        <Switch>
          <Route exact path="/api/campuses" component={CampusList} />
          <Route exact path="/" component={CampusList} />
          <Route path="/api/campuses/*" component={Campus} />
          <Route path="/api/students" component={StudentList} />
          {/* <Redirect to="/api/campuses" component={CampusList} />  */}
        </Switch>
        <Options />
        <Footer />
      </div>
    )
  }
}

/*
A couple of comments on your routes:

The routes above are prepended with /api which mirrors a backend REST
pattern, which you definitely want to keep separate from front end routes.
If I type "api/campuses" into the url, according to your routes above, it
should render CampusList. However, it hits your backend route first, which renders
JSON of all the campuses because your server code has middleware set up to route
all requests prepended with /api to a separate (backend) router, which from there
finds an exact match for this url, and is set up to res.json all campuses.

So I would stay away from writing /api into any of your front end routes

Also, there is no difference in /api/campuses as opposed to just going to '/'
or root, so that route could be eliminated completely.
*/
