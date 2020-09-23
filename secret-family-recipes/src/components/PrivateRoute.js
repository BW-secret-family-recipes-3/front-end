import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = {...rest}.state;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token') !== '') {
          return <Component {...props} />;
        } else {
          return <Redirect to="/user/login" />;
        }}}
    />
  );
};

function mapStateToProps(state) {
  return {
      state: state.fetchToken.loggedIn
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);