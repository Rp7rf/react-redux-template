import React      from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppContainer     from './components/AppContainer.jsx'

import { createStore }  from 'redux' // need
import { Provider }     from 'react-redux' // need

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

render(
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>,
  document.getElementById('app')
)
