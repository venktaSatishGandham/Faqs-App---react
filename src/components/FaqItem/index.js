import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem

/* Write your code here.
import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  state = {
    isShow: false,
  }

  onExpandItem = () => {
    this.setState(prev => ({
      isShow: !prev.isShow,
    }))
  }

  render() {
    const {singleFaqItem} = this.props
    const {isShow} = this.state
    const {answerText, questionText} = singleFaqItem
    return (
      <li className="single-item">
        <div className="hide-section">
          <h1>{questionText}</h1>
          <button type="button" className="button" onClick={this.onExpandItem}>
            <img
              alt={isShow ? 'plus' : 'minus'}
              src={
                isShow
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              }
              className="plus-icon"
            />
          </button>
        </div>
        {isShow && (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
*/
