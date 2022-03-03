import React, { Component} from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target}) {
    const { name, value} = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
    <>
      <fieldset>
        <label> Nome
          {' '} 
          <input name="name" type={'text'} value={this.state.name} max={40} onChange={this.handleChange} required></input>
        </label>
        <label>E-mail
          {' '}
          <input name="email" type={'email'} value={this.state.email} max="50" onChange={this.handleChange} required></input>
        </label>
        <label>CPF
          {' '}
        <input name="cpf" type={'number'} value={this.state.cpf}  max='11' onChange={this.handleChange} required></input>
        </label>
      </fieldset>
    </>
    )
  }
}
export default Form;