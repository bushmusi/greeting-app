import React, { useEffect } from 'react'
import { greetingRequestSuccess, requestGreetings } from './redux/store'
import { useDispatch, useSelector } from 'react-redux'

export default function Greeting() {

  const data = useSelector(state => state.greetings)
  const dispatch = useDispatch()

  function fetchData() {
    fetch('/messages')
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        dispatch(greetingRequestSuccess(data))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div>
        <h3>Greeting:
        <i> {data} </i></h3>
      </div>
      <br/>
      <button type='button' onClick={() => fetchData() }>Get greetings</button>
    </div>
  )
}

