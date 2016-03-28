import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {
    App,
    Home,
    About,
    Survey,
    NotFound,
  } from 'containers'

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="survey" component={Survey}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
