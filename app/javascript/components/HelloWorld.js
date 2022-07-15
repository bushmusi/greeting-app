import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Greeting from './Greeting'

export default function HelloWorld() {

  return (
    <Provider store={store}>
      <Greeting />
    </Provider>
  )
}

