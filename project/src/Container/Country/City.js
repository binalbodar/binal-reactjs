import React, { Component } from 'react'

export default class City extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            City:'Surat'
        };
    }

    ChangeCity=()=>{
        this.setState({
            City:'baroda'
        });
    }
    
  render() {
    return (
        <>
      <div>City:{this.state.City}</div>
      <button onClick={()=>this.ChangeCity(
          
      )}>Change</button>
      </>
    )
  }
}
