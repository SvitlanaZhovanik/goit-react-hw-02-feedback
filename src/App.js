import React, { Component } from 'react';
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
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = value => {
    const percentageGood = (this.state.good / value) * 100;
    return percentageGood;
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
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            percentage={positiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
