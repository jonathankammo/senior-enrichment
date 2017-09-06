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
      <div className="col-xs-6" key={campus.id}>
        <NavLink className="thumbnail" to={`/api/campuses/${campus.id}`}>
          <img src={campus.image} />
          <div className="caption">
            <h5>
              <span>{campus.name}</span>
            </h5>
             <small><button className="btn btn-danger btn-sm glyphicon glyphicon-remove" /></small>
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

/*
No need for the withRouter wrapping here. The only information you are accessing
from props is campuses, which you place there manually through your mapStateToProps function.
*/

const CampusListContainer = withRouter(connector(CampusList));
export default CampusListContainer;
