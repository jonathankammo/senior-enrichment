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

const Container = withRouter(connect(mapStateToProps)(Footer));
export default Container;
