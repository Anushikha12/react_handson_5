import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Akansha"
      }
    }
     changeName=()=>{
        this.setState({name:"Anushikha"})
    }
  render() {
    console.log('rendered one time')
    return (
      <div>
        <h3>Click the button to change the name:{this.state.name}</h3>
        <button onClick={()=>this.changeName()}>click here</button>
      </div>
    )
  }
}
