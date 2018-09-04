// https://github.com/catamphetamine/react-website#redux-module
import { ReduxModule } from 'react-website'

const redux = new ReduxModule()

export const set = redux.action(
  (value) => async http => value,
  'value'
)

export default redux.reducer({ value: 0 })