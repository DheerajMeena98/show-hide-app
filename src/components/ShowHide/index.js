import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {
    isFirstNameHide: false,
    isLastNameHide: false,
  }

  showHideButtonFirstName = () => {
    this.setState(prevState => {
      if (prevState.isFirstNameHide === false) {
        return {isFirstNameHide: true}
      }
      return {isFirstNameHide: false}
    })
  }

  showHideButtonLastName = () => {
    this.setState(prevState => {
      if (prevState.isLastNameHide === false) {
        return {isLastNameHide: true}
      }
      return {isLastNameHide: false}
    })
  }

  render() {
    const {isFirstNameHide, isLastNameHide} = this.state

    return (
      <div className="show-hide-bcg-container">
        <h1 className="show-hide-heading"> Show/Hide</h1>
        <div className="show-hide-container">
          <div className="show-hide-each-card">
            <button
              onClick={this.showHideButtonFirstName}
              className="name-button"
              type="button"
            >
              {' '}
              Show/Hide Firstname{' '}
            </button>
            {isFirstNameHide && (
              <div className="name-container">
                <p className="first-name"> Joe </p>
              </div>
            )}
          </div>
          <div className="show-hide-each-card">
            <button
              onClick={this.showHideButtonLastName}
              className="name-button"
              type="button"
            >
              {' '}
              Show/Hide Lastname{' '}
            </button>
            {isLastNameHide && (
              <div className="name-container">
                <p className="first-name"> Jonas </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
