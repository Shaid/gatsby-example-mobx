import { action, computed, observable } from 'mobx'
import { persist } from 'mobx-persist'

const defaults = {
  details: {
    username: '',
    first: '',
    last: '',
    email: ''
  }
}

export default class ToggleStore {
  @persist @observable toggle = false

  @computed get isToggled() {
    return this.toggle
  }

  @action.bound toggleMe() {
    this.toggle = !this.toggle
    console.log(`Toggle status: ${this.toggle}`)
  }
}
