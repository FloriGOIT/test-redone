import React from 'react';
import style from './feedback.module.scss';

class Feedback extends React.Component {
  state = { good: 0, bad: 0, neutral: 0 };
  handleFdbk = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  render() {
    let total = this.state.good + this.state.bad + this.state.neutral;
    let percentage = ((this.state.good / total) * 100).toFixed(2);
    let options = Object.keys(this.state);
    return (
      <section className={style.feedbackAll}>
        <h2>Offer feedback</h2>
        <br />
        <div className={style.btns}>
          {options.map(option => {
            return (
              <button
                type="button"
                key={option + `Btn`}
                onClick={() => this.handleFdbk(option)}
              >
                {option.toUpperCase()}
              </button>
            );
          })}
        </div>
        <h3>Cumulated stats</h3>
        <div className={style.feedback}>
          {options.map(option => {
            return (
              <span key={option + `Span`}>
                {option.toUpperCase()}: {this.state[option]}
              </span>
            );
          })}
          <span>TOTAL: {total}</span>
          <span style={{ visibility: total > 0 ? `visible` : `hidden` }}>
            Percentage of positive: {percentage} %
          </span>
        </div>
      </section>
    );
  }
}

export default Feedback;



