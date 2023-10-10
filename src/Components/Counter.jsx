import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

function Counter() {

  //state creation 
  const [counter, setCounter] = useState(0) //applying 0 as initial value
  //fuction counter
  function incrementCounter() {
    //increment by 1
    setCounter(counter + 1)
  }

  //derement function
  function decrement() {
    if(counter !==0){
    setCounter(counter - 1)
    }
  }

  //reset
  function reset() {
    setCounter(counter - counter)

  }

  return (
    <div className="container m-5 p-5  d-flex justify-content-center align-items center">
      <div className='p-5 border rounded border-2 border-secondary shadow w-50'>
        <h1 className=' text-center'>Counter App</h1>
        <h2 className='text-danger text-center'>{counter}</h2>

        <div className='text-center'>
          <MDBBtn onClick={incrementCounter} className='me-3'>
            Increment
          </MDBBtn>

          <MDBBtn onClick={reset} className='me-3'>
            Reset
          </MDBBtn>

          <MDBBtn onClick={decrement}>
            Decrement
          </MDBBtn>
        </div>

      </div>

    </div>
  )
}

export default Counter