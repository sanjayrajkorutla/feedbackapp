/* eslint-disable lines-between-class-members */
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBack: false,
  }
  onClickEmoji = () => this.setState({isFeedBack: true})
  renderFeedBackList = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="questionlist">
        <h1> How satisfied are you with our customer support performance?</h1>
        <ul className="amoralist">
          {emojis.map(eachItem => (
            <li key={eachItem.id}>
              <button
                type="button"
                onClick={this.onClickEmoji}
                className="emoji-btn"
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji"
                />
                <br />
                <span className="emoji-name">{eachItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  renderThankYouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }
  render() {
    const {isFeedBack} = this.state
    return (
      <div className="pinkBg">
        <div className="feedbackbg">
          {isFeedBack ? this.renderThankYouCard() : this.renderFeedBackList()}
        </div>
      </div>
    )
  }
}

export default Feedback
