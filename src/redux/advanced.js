// https://github.com/catamphetamine/react-website#redux-module
import { reduxModule } from 'react-website'

const redux = reduxModule()

export const set = redux.action(
  (value) => async http => value,
  'value'
)

export default redux.reducer({ value: 0 })