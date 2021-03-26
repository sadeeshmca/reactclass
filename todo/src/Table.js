import React, { Component } from 'react';
import './table.css';

export default class Table extends Form {
constructor(props){
    super(props);

}
  render(){
     const {formData} = this.props;
     let rows = []
     if(formData){
       for(var i=0; i<formData.length;i++){
        rows.push(<tr><td>{formData[i].username}</td><td>{formData[i].password}</td></tr>)
        }  
      }
      return(
        <div id="Table">
          <table>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
            {rows}

          </table>
        </div>
      );
    }
   }