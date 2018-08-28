import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        FirstName: <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName} /><br />
        LastName: <input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName} />
      </form>
    );
  }
}

export default ControlledInput;
