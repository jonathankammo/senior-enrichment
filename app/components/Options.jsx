import React, { Component } from 'react';
import store from '../store.jsx';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
  return {

  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

function Options(props) {

  return (
    <div className="center">
      <button className="btn btn-primary"> Add! <span className="glyphicon glyphicon-add" /></button>
    </div>
  )
}

const Container = withRouter(connect(mapStateToProps)(Options));
export default Container;
