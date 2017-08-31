import React, { Component } from 'react';
import store from '../store.jsx';
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    campuses: state.campuses
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

function CampusList (props) {
  console.log(props);
  const { campuses } = props;
  const campusDiv = campuses.map((campus) => {
    return (
      <div key={campus.id}>
        Campus: {campus.name}
      </div>
    );
  });

  return (
    <div>
      {campusDiv}
    </div>
  )
}

const connector = connect(mapStateToProps);

const CampusListContainer = connector(CampusList);
export default CampusListContainer;
