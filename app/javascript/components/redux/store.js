import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const REQUEST_GREETINGS = 'GREETINGS/REQUEST'
const GREETINGS_REQUEST_SUCCESS = 'GREETINGS/SUCCESS'

const initState = {
  greetings: ''
}

export const requestGreetings = () => {
  return {
    type: REQUEST_GREETINGS
  }
}

export const greetingRequestSuccess = (data) => {
  return {
    type: GREETINGS_REQUEST_SUCCESS,
    payload: data
  }
}

const greetingReducer = (state = initState, action) => {
  console.log('Type:',action.type);
  console.log('state', state);
  switch (action.type) {
  case REQUEST_GREETINGS:
      return { ...state, loading: true }
    case GREETINGS_REQUEST_SUCCESS:
      return { ...state, greetings: action.payload[0].text }
    default:
      return state;
  }
}

const store = configureStore(
  {
    reducer: greetingReducer
  },
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
