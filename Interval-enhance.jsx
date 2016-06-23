import React from 'react';

export let IntervalEnhance = ComposedComponent => class extends React.Component {

  static displayName = 'ComponentEnhancedWithIntervalHOC';

  state = {
    seconds: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1000
    });
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }

};
