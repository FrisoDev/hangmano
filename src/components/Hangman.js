import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import AddLetter from './AddLetter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Hangman extends PureComponent {
  render() {
    function refreshPage(){
    window.location.reload();
}

    return (
      <div>
        <header>
          <Title />
        </header>

        <main>
         <h1 className="word">{ this.props.letter }</h1>
           <StartButton />
        </main>
        <button onClick={refreshPage}>
        new Game
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ letter }) => ({ letter })
export default connect(mapStateToProps)(Hangman)
