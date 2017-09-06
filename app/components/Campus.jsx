import React, { Component } from 'react';
import store from '../store.jsx';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

function Campus(props) {
  const campusId = +(props.match.url.slice(-1));
  const campus = props.campuses.find(campus => campus.id === campusId);
  let campusName = null;
  if (campus) campusName = campus.name;
  const campusStudents = props.students.filter(student => student.campusId === campusId);

  const studentDiv = campusStudents.map((student, index) => {
    return (

      <tr key={student.id}>
        <td>{index + 1}</td>
        <td>{student.name}</td>
        <td><button onClick={props.handleClick} name={student.id} className="btn btn-sm btn-danger glyphicon glyphicon-remove" /></td>
      </tr>
    );
  });

  return (
    <div>
      <h3>{campusName}</h3>
      <table>
        <thead>
          <tr>
            <th>Student #</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {studentDiv}
        </tbody>
      </table>
    </div>
  )
}

/*
Interesting pattern wrapping your connected component in withRouter().This is
allowing your component to re-render upon the url updating with the correct
campus id. This is a valid way to ensure the page will re-render with the proper
information.

However, the only reason it's needed is that you are passing ALL
campuses down to your component in your mapState function, and so the component
needs to know which one to render, so it matches a campus id to the url and selects
the relevant campus from the list.

A general rule of thumb here is that you only really want to pass lower level
components the bare minimum they need to display content on the page. Passing
all the information it could possibly need and then relying upon further logic
to select the proper contents for rendering kind've breaks the intended pattern
for react-redux. Another way to write this could be:

  all campus view:
    -has all campuses
    -when a single campus is clicked, it renders the single campus
     view passing only the campus that was clicked down in props.

This would also eliminate need for the withRouter() component as well.

I guess a way to highlight the importance of only passing relevant contents
down to components that will then render a subset of these contents would
be "scale" - Passing all the information here is easy and pretty inexpensive,
but imagine the same code running with a much larger data set. That would mean
that to display a single piece of content, you would have to pass a component
ALL of your data. You could see how this pattern would eventually lead to things
getting out of hand pretty quickly.
*/

const connector = connect(mapStateToProps);

const CampusContainer = withRouter(connector(Campus));
export default CampusContainer;
