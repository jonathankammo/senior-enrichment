import React, { Component } from 'react';
import store from '../store.jsx';
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    students: state.students
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

function StudentList (props) {
  console.log(props);
  const { students } = props;
  const studentDiv = students.map((student) => {
    return (
      <div key={student.id}>
        Student {student.name}
      </div>
    );
  });

  return (
    <div>
      {studentDiv}
    </div>
  )
}

const connector = connect(mapStateToProps);

const StudentListContainer = connector(StudentList);
export default StudentListContainer;

