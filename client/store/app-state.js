import {
  observable,
  computed,
  action,
  autorun
} from 'mobx'

class AppState {
  @observable count = 0

  @observable name = "z"
  @computed get Msg() {
    return `${this.name} and count is ${this.count}`
  }
  @action add() {
    this.count += 2
  }
}

const appState = new AppState()

// setInterval(() => {
//   appState.add()
// }, 2000)

autorun(() => {
  console.log(appState.Msg)
})

export default appState
