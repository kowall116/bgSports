import React, { Component } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'

import * as reducers from '../reducers'

import BGSports from './BGSports'

const createStoreWithMiddleware = applyMiddleware(
	thunk,
	apiMiddleware
)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BGSports />
      </Provider>
    )
  }
}