import React, { Component } from 'react'
import {render} from 'react-dom'

import Specimen from '../src'

class Demo extends Component {
  render () {
    return <Specimen />
  }
}

render(<Demo />, document.getElementById('app'))
