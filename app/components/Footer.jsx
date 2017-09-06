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

function Footer(props) {

  return (
    <div className="footer text-center">
      <div className="vcenter muted">
        <span>
          <span className="glyphicon glyphicon-education" /> --- Brought to you by Jon K. --- <span className="glyphicon glyphicon-education" />
        </span>
      </div>
    </div>
  );
}

/*
No need for withRouter or connect here. There are no dispatch methods needed
nor is there any state that the footer is concerned with, so the footer, in this
case, could just be a pure function that returns some HTML since it is just static content.
*/

const Container = withRouter(connect(mapStateToProps)(Footer));
export default Container;
