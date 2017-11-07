import React, { PureComponent } from 'react'
import Title from './Title'
import StartButton from './StartButton'
import './Hangman.css'
import { connect } from 'react-redux'
// import Man from '../images/man.jpg'
// import Man1 from '../images/man1.jpg'
// import Man2 from '../images/man2.jpg'
// import Man3 from '../images/man3.jpg'
// import Man4 from '../images/man4.jpg'

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
          <StartButton />
          {this.props.letter[0] === "Winnar" &&
              <button className="newgame" onClick={reFreshPage}>
                New Game
              </button>
            }
          {this.props.letter[1] > 5 &&
              <button className="newgame" onClick={reFreshPage}>
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
