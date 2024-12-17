import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
class CounterAPP extends Component{
   constructor(){
    super();
this.state={counter:0}
   }
   handleEvent0=()=>{
    this.setState({counter:this.state.counter-1})
   }
   handleEvent1=()=>{
    this.setState({counter:this.state.counter-2})
   }
   handleEvent2=()=>{
    this.setState({counter:this.state.counter-3})
   }
   handleEvent3=()=>{
    this.setState({counter:this.state.counter-4})
   }
   handleEvent4=()=>{
    this.setState({counter:this.state.counter-5})
   }
   handleEvent5=()=>{
    this.setState({counter:this.state.counter+1})
   }
   handleEvent6=()=>{
    this.setState({counter:this.state.counter+2})
   }
   handleEvent7=()=>{
    this.setState({counter:this.state.counter+3})
   }
   handleEvent8=()=>{
    this.setState({counter:this.state.counter+4})
   }
   handleEvent9=()=>{
    this.setState({counter:this.state.counter+5})
   }
   render(){
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <p >Task -7</p>
        <p>Date- 28-11-2024
        </p>
        </div>
        <div style={{marginTop:"50px"}}>
            <div style={{display:"flex", justifyContent:"center", gap: "20px"}}>
          <Button onClick={this.handleEvent0} variant="danger">-1</Button>
          <Button onClick={this.handleEvent1} variant="danger">-2</Button>
          <Button onClick={this.handleEvent2} variant="danger">-3</Button>
          <Button onClick={this.handleEvent3} variant="danger">-4</Button>
          <Button onClick={this.handleEvent4} variant="danger">-5</Button>
          </div>
          
          <div style={{display:"flex", justifyContent: "center", gap:"20px", marginTop:"100px"}}>
          <Button onClick={this.handleEvent5} variant="success">+1</Button>
          <Button onClick={this.handleEvent6} variant="success">+2</Button>
          <Button onClick={this.handleEvent7} variant="success">+3</Button>
          <Button onClick={this.handleEvent8} variant="success">+4</Button>
          <Button onClick={this.handleEvent9} variant="success">+5</Button>
          </div>
          <div style={{margin:"50px", fontFamily:"calibri", textAlignLast:"center", fontSize:"50px",}}>{this.state.counter}</div>
        </div>
       </>
    )
   }
}
export default CounterAPP