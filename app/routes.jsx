import React from 'react';
import { Route } from 'react-router-dom';
import keyIndex from 'react-key-index';
import Inbox from './Components/Inbox';
import DisplayDate from './Components/DisplayDate';


let routes = [
  { path: '/',
    component: DisplayDate,
    exact: true,

  },
  { path: '/Inbox',
    component: Inbox,
    exact: true,
  },
  // { path: '/tacos',
  //   component: Tacos,
  //   routes: [
  //     { path: '/tacos/bus',
  //       component: Bus
  //     },
  //     { path: '/tacos/cart',
  //       component: Cart
  //     }
  //   ]
  // }
];

// Add unique keys to the array
routes = keyIndex(routes, 1);

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
  )}
  />
);

export { routes, RouteWithSubRoutes };
