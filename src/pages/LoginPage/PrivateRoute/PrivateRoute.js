import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


// create a private route
const PrivateRoute = ({ children, ...rest }) => {
  const { user,  } = useAuth()
    return (
         <Route
      {...rest}
      render={({ location }) =>
     user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;