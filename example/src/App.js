import React, { Component } from 'react'

import CheckBox from 'react-simple-checkbox'

export default class App extends Component {
  render () {
    return (
      <div>
        <CheckBox markedColor = {"#153FAE"} borderColor = {"#135EAF"} />
      </div>
    )
  }
}
