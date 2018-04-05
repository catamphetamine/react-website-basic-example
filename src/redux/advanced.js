// https://github.com/catamphetamine/react-website#redux-module
import { reduxModule } from 'react-website'

const redux = reduxModule('ADVANCED')

export const set = redux.action(
  'SET',
  async ({ http }, value) => value,
  'value'
)

export default redux.reducer({ value: 0 })