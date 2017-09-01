import React, { Component } from 'react';
import store from '../store.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    students: state.students
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick(e) {
      dispatch()

    }
  }
}

function StudentList(props) {
  console.log(props);
  const { students } = props;
  const studentDiv = students.map((student, index) => {
    return (
      // <div key={student.id}>
      //   Student {student.name}
      // </div>

      <tr key={student.id}>
        <td>{index + 1}</td>
        <td>{student.name}</td>
        <td>{student.campusId}</td>
        <td><button className="glyphicon glyphicon-remove" /></td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student #</th>
            <th>Name</th>
            <th>Campus</th>
          </tr>
        </thead>
        <tbody>
          {studentDiv}
        </tbody>
      </table>
    </div>
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

const StudentListContainer = connector(StudentList);
export default StudentListContainer;

