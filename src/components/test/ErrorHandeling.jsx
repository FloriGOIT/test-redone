import React from 'react';

export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null, info: null };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.info?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export class BuggyComponent extends React.Component {
  state = { shouldCrash: false };

  handleClick = () => {
    this.setState({ shouldCrash: true });
  };

  render() {
    if (this.state.shouldCrash) {
      throw new Error('Oops! This component crashed.');
    }

    return (
      <div>
        <p>This component is working fine.</p>
        <button onClick={this.handleClick}>Crash this component</button>
      </div>
    );
  }
}
