import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import { connect } from 'react-redux'
import Man from '../images/Man.jpeg'
import Man1 from '../images/Man1.jpeg'
import Man2 from '../images/Man2.jpeg'
import Man3 from '../images/Man3.jpeg'
import Man4 from '../images/Man4.jpeg'


export class Hangman extends PureComponent {
  render() {
    function reFresh(){
    window.location.reload();
  }
  return (
      <div>
        <header>
          <Title />
        </header>

        <main>
          { this.props.letter[1] > 1 && this.props.letter[0] !== "You Won!!!!" ?
            <img className="man1" alt="hangman" src={Man1} /> : null }
          { this.props.letter[1] > 2 && this.props.letter[0] !== "You Won!!!!" ?
            <img className="man2" alt="hangman" src={Man2} /> : null }
          { this.props.letter[1] > 3 && this.props.letter[0] !== "You Won!!!!" ?
            <img className="man3" alt="hangman" src={Man3} /> : null }
          { this.props.letter[1] > 4 && this.props.letter[0] !== "You Won!!!!" ?
            <img className="man4 "alt="hangman" src={Man4} /> : null }
          { this.props.letter[1] > 5 ?
            <img className="man" alt="hangman" src={Man} /> : null }
          <h1 className="word">{ this.props.letter[0] }</h1>
          <StartButton />
          {this.props.letter[0] === "You Won!!!!" &&
              <button className="newgame" onClick={reFresh}>
                New Game
              </button>
            }
          {this.props.letter[1] > 5 &&
              <button className="newgame" onClick={reFresh}>
                New Game
              </button>
            }
            {this.props.letter[1] > 6 ? reFresh() : null  }
        </main>
      </div>
    )

  }
}

const mapStateToProps = ({ letter }) => ({ letter })
export default connect(mapStateToProps)(Hangman)
