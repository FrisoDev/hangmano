import React, { PureComponent } from 'react'
import './StartButton.css'
import  guess  from '../actions/guess'
import { connect } from 'react-redux'
import AddLetter from './AddLetter'

export class StartButton extends PureComponent {
  render() {
      if (this.props.hide) { return <AddLetter />}

    return (
      <button className="start" onClick= { this.props.guess }>
        Start Game
      </button>
    )
  }
}

const mapStateToProps = ({ letter }) => ({
  hide: letter.length > 0 ,
})

export default connect((mapStateToProps), { guess })(StartButton)
