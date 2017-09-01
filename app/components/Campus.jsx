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

const connector = connect(mapStateToProps);

const CampusContainer = withRouter(connector(Campus));
export default CampusContainer;
