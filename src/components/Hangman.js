import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import { connect } from 'react-redux'
import HangMan from '../images/HangMan.png'
import HangMan1 from '../images/HangMan1.png'
import HangMan2 from '../images/HangMan2.png'
import HangMan3 from '../images/HangMan3.png'
import HangMan4 from '../images/HangMan4.png'


export class Hangman extends PureComponent {


  render() {

    // function imageExists(image_url){
    //   var http = new XMLHttpRequest();
    //   http.open('HEAD', image_url, false);
    //   http.send();
    //   return http.status != 404
    function reFresh(){
    window.location.reload();
  }
  return (
      <div>
        <header>
          <Title />
        </header>

        <main>

          { this.props.letter[1] > 1 && this.props.letter[0] !== "Winner winner" ?
            <img className="man1" alt="hangman" src={HangMan1} /> : null }
          { this.props.letter[1] > 2 && this.props.letter[0] !== "Winner winner" ?
            <img className="man2" alt="hangman" src={HangMan2} /> : null }
          { this.props.letter[1] > 3 && this.props.letter[0] !== "Winner winner" ?
            <img className="man3" alt="hangman" src={HangMan3} /> : null }
          { this.props.letter[1] > 4 && this.props.letter[0] !== "Winner winner" ?
            <img className="man4 "alt="hangman" src={HangMan4} /> : null }
          { this.props.letter[1] > 5 ?
            <img className="man" alt="hangman" src={HangMan} /> : null }
          <h1 className="word">{ this.props.letter[0] }</h1>
          <StartButton />
          {this.props.letter[0] === "Winner winner" &&
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
