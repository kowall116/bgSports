import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import fetchApiMiddleware from '../middleware/fetchApiMiddleware'

import * as reducers from '../reducers'

import BGSports from './BGSports'

const createStoreWithMiddleware = applyMiddleware(
	thunk,
	fetchApiMiddleware
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