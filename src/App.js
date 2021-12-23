import React, { Component } from 'react';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import FeedbackOption from './components/FeedbackOptions/FeedbackOptions';
import Statistic from './components/Statistics/Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = key => {
    this.setState(state => ({ [key]: state[key] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = value => {
    return Math.round((this.state.good / value) * 100);
  };
  render() {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistic">
          {total ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
