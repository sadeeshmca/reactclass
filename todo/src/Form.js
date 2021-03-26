import React, { Component } from 'react';
import './form.css';
import Table './Table.js';

export default class Form extends Component {
    constructor(props){
    super(props);
    this.state = {
    uName: '',
    uPassword: '',
    formValid: false,
    formData: []
}
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
}

changeUsername(event){
   this.setState({
      uName: event.target.value
   })
}

changePassword(event){
    this.setState({
      uPassword: event.target.value
    })
}

handleSubmit(e){
     e.preventDefault();
     if(this.state.uName != "" && this.state.uPassword != "" && this.state.uName != null && this.state.uPassword != null){
         let object = {}
         object.username = this.state.uName;
         object.password = this.state.uPassword;

         this.setState({
            formValid: true,
            formData: obj
          })

     }
}

renderTable(){
     <Table formData = {this.state.formData} />
}

  render(){
      return(
        <div id="Form">

          <form onSubmit={this.handleSubmit}>
              Username<br/>
              <input type="text" value = {this.state.uName} name="username" placeholder="Username" onChange={this.changeUsername}/><br/>
              Password<br/>
              <input type="password" value = {this.state.uPassword} name="password" placeholder="Password" onChange={this.changePassword}/><br/>
              <br/>
              <input type="submit" value="Submit" />
          </form>
{this.state.formValid ? this.renderTable() : ''}
        </div>
      );
    }

}