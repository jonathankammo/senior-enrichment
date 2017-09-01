import React, { Component } from 'react';
import store from '../store.jsx';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
  return {
    campuses: state.campuses
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

function CampusList(props) {
  console.log(props);
  const { campuses } = props;
  const campusDiv = campuses.map((campus) => {
    return (
      // <div key={campus.id}>
      //   <NavLink to={`/api/channels/${campus.id}`} activeClassName="active">
      //     Campus: {campus.name}
      //   </NavLink>
      // </div>
      <div className="col-xs-6" key={campus.id}>
        <NavLink className="thumbnail" to={`/api/campuses/${campus.id}`}>
          <img src={campus.image} />
          <div className="caption">
            <h5>
              <span>{campus.name}</span>
            </h5>
            {/* <small>{campus.songs.length} songs</small> */}
          </div>
        </NavLink>
      </div>
    );
  });

  return (
    <div className="row">
      {campusDiv}
    </div>
  )
}

const connector = connect(mapStateToProps);

const CampusListContainer = withRouter(connector(CampusList));
export default CampusListContainer;
