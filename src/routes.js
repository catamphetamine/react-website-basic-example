import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './pages/App'
import Basic from './pages/Basic'
import Advanced from './pages/Advanced'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Basic }/>
    <Route path="advanced" component={ Advanced }/>
  </Route>
)