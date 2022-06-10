import React, { Component } from 'react'

export default class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            country:'India'
        };
    }
    ChangeCountry=()=>{
        this.setState({
            country:'UK'
        });
    }
  render() {
    return (
        <>
            <div>Country:{this.state.country}</div>
            <button onClick={()=>this.ChangeCountry()}>Change</button>
        </>
    )
  }
}
