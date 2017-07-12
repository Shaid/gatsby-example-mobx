import React, { Component } from 'react'
import { action } from 'mobx'
import { inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
//import Link from 'gatsby-link'
import { Link, Switch, Redirect, Route, withRouter } from 'react-router-dom'

@inject('toggleStore')
@withRouter
@observer
class App extends Component {
  render() {
    return (
      <section>
        <h2><button onClick={this.props.toggleStore.toggleMe}>Toggle me</button> - I am currently {this.props.toggleStore.isToggled ? 'true' : 'false'}</h2>

        <Switch>
          <Route exact path="/app/login" component={FauxLogin} />

          <Route path="/app" render={() => (
            this.props.toggleStore.isToggled ? (
              <FauxDashboard />
            ) : (
              <Redirect to={{
                pathname: '/app/login',
                state: { from: this.props.location }
              }}/>
            )
          )}/>
        </Switch>

        <DevTools />
      </section>
    )
  }
}

@inject('toggleStore')
@observer
class FauxDashboard extends Component {
  render() {
    return (
      <h3>This is totally a dashboard.</h3>
    )
  }
}

@inject('toggleStore')
@observer
class FauxLogin extends Component {
  render() {
    if(this.props.toggleStore.isToggled){
      return (<Redirect to='/app' />)
    }
    return (
      <h3>In a past life I was a login page.</h3>
    )
  }
}

export default App
