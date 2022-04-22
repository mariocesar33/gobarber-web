import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RoutePropss extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Routee: React.FC<RoutePropss> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  console.log(user, isPrivate);

  return (
    <Route
      {...rest}
      element={isPrivate === !!user ? (<Component />) : (<Route path={isPrivate ? '/' : '/dashboard'} />)}
    />
  );
};

export default Routee;

// render={({ location }) => {
//   return isPrivate === !!user ? (
//     <Component />
//   ) : (
//     <Route
//       to={{
//         pathname: isPrivate ? '/' : '/dashboard',
//         state: { from: location },
//       }}
//     />
//   );
// }}
