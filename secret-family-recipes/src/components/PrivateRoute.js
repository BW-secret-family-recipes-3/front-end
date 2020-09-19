import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return <Component {...props} />
        } else {
          return <Redirect to="/user/login" />
        }
      }}
    />
  );
}

export default PrivateRoute;