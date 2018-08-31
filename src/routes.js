import React from 'react'
import { Route } from 'react-website'

import App from './pages/App'
import Basic from './pages/Basic'
import Advanced from './pages/Advanced'

export default (
  <Route path="/" Component={ App }>
    <Route Component={ Basic }/>
    <Route path="advanced" Component={ Advanced }/>
  </Route>
)