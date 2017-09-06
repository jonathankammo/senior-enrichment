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

function NavBar(props) {
  console.log('navbar component props: ', props);
  // let channelId = +props.history.location.pathname.split('/')[2] - 1; // e.x) /channels/7
  // let channelName = props.channels[channelId] ? props.channels[channelId].name : 'Create a channel';

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/api/students">Students</NavLink>
      {/* <NameEntry /> */}
    </nav>
  );
}

/*
Could also just be a dumb component. Doesn't need state or dispatch access to store
or any objects passed from React Router.
*/

const Container = withRouter(connect(mapStateToProps)(NavBar));
export default Container;
