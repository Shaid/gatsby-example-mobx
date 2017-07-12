import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { action, useStrict } from 'mobx'
import { observer, Provider } from 'mobx-react'
import ToggleStore from '../components/App/stores/ToggleStore'
import { create } from 'mobx-persist'

import App from '../components/App/App'

// enforce actions for mobx
useStrict(true)

let app = ''

const stores = {
  toggleStore: new ToggleStore()
}

const hydrate = create()
hydrate('toggle', stores.toggleStore).then((args) => { console.log('hydrated!', args)})


@withRouter
@observer
class AppIndex extends Component {
  render() {
    return (
      <Provider {...stores}>
        <App />
      </Provider>
    )
  }
}

AppIndex.propTypes = {
}

export default AppIndex
