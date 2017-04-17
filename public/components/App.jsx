import React, { Component } from 'react'
import update from 'immutability-helper'
import AppBar from 'material-ui/AppBar'
import DayView from './DayView'

/**
 * App Container
 * @type {ReactComponent}
 */
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: props.title
    }
  }
  onClickTitle = () => {
    this.setState(update(this.state, { title: { $set : 'changed' } }))    
  }
  /**
   * Render
   * @return {ReactDomElement} React DOM Element
   */
  render() {
    const weeks = ( this.props.data || [] )

    return (
      <div>
        <AppBar
          title={ this.state.title }
          onLeftIconButtonTouchTap={ this.onClickTitle }
        />
        <DayView foo={ 'var' } />
        <p>{ 'hello!' }</p>

      </div>
    )
  }

}
