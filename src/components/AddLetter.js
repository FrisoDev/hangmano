import React from 'react'
import { connect } from 'react-redux'
import  guess  from '../actions/guess'
import './AddLetter.css'


let AddLetter = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={i => {
          i.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(guess(input.value))
          input.value = ''
        }}
        >


        <input
          ref={node => {
            input = node
          }}
        />

        
        <button className="guess" type="submit">
         Guess
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ guess }) => ({ guess})

export default connect(mapStateToProps)(AddLetter)
