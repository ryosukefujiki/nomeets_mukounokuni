export const state = () => ({
  leftClicked: false,
})

export const getters = {
  leftClicked: state => state.leftClicked,
}
// 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている

export const mutations = {
  leftClick (state) {
    state.leftClicked = !state.leftClicked
  }
}
