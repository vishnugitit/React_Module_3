import React, { Component } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
class Spinner extends Component {
    constructor(){
        super();
        this.state={products:[]}
console.log("Constructing");

    }
    componentDidMount(){
console.log("Mounting")

// USing Fetch 

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=> this.setState({products:json}))

// Using Axiox

axios.get('https://fakestoreapi.com/products').then((res)=>{
    // console.log(res)
    this.setState({products:res.data})
})
    }
    static getDerivedStateFromProps(){
        console.log("Derived")
        return null;
    }
  render() {
    console.log("rendering")
    return (<div style={{display:"flex", flexWrap:"wrap" , justifyContent:"center", gap:"20px"}}>
{this.state.products.map((a,b)=>{
    return (
       <div style={{display:"flex",flexDirection:"column"}}>
    
         <Card style={{ width: '18rem' ,height:"600px",}}>
      <Card.Img variant="top" src={a.image} style={{height: "200px", width:"200px"}}/>
      <Card.Body>
        <Card.Title>{a.title}</Card.Title>
        <Card.Text style={{ height:"100px",overflowY:"scroll"}}>
         {a.description}
        </Card.Text>
     
      </Card.Body>
    </Card>

    <Button variant="primary">Go somewhere</Button>
    </div>
     
    )
})}
    </div>);
  }
}
export default Spinner;
