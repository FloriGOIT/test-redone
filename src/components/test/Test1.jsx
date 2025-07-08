//this.props.onSubmit(this.state.login );

import React from 'react';

class SignUpForm extends React.Component {
  state = {login: '',
  };

  handleChange = e => {this.setState({ login: e.target.value });};

  handleSubmit = evt => {
    evt.preventDefault();
          this.props.onSubmit(this.state.login );
          console.log("spread", this.state.login);
          this.setState({ login: "" })
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='text'>Name</label>
        <input
         id="text"
          type="text"
          placeholder="Enter login"
          value={login}
          onChange={this.handleChange}
        />

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export default SignUpForm;
