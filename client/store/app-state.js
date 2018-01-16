import {
  observable,
  computed,
  action,
  autorun
} from 'mobx'

export default class AppState {
  constructor({ count, name } = { count: 1, name: "2222" }) {
    this.name = name
    this.count = count
  }
  @observable count
  @observable name

  @computed get Msg() {
    return `${this.name} and count is ${this.count}`
  }

  @action add() {
    this.count += 2
  }

  toJson() {
    return {
      count: this.count,
      name: this.name
    }
  }
}

// const appState = new AppState()

// setInterval(() => {
//   appState.add()
// }, 2000)

// autorun(() => {
//   console.log(appState.Msg)
// })
