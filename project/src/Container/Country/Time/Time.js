import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            time:new Date()    
        }
    }

    tick=()=>{
        this.setState({
            time:new Date() //1. constructor set initial value.
        })
    }

    componentDidMount=()=> {
        //3. Use this method for requst data to server.
        setInterval(()=>this.tick(),1000);
    }

    componentDidUpdate=(prevProps, prevState)=>{
        //4. call componentDidUpdate when previos state and current state is not same.
        if (prevState.time !== this.state.time){
            console.log("componentDidUpdate called");
        }
    }

    componentWillUnmount=()=>{
        //5. componentWillUnmount used to realse resourse frome componet
        clearInterval(this.timeId);
    }

  render() {
      //2. Call render method each time when state value change.
    return (
      <div>
          {this.state.time.toLocaleTimeString()}
        </div>
    );
  }
}
