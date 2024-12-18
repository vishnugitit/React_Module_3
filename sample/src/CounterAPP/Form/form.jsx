import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = { details: {} }; // Use an object to store individual details
  }

  formEvent = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const mobile = e.target.mobile.value;

    // Update state with the details as an object
    this.setState({
      details: { name, email, password, mobile },
    });
  };

  render() {
    const { name, email, password, mobile } = this.state.details;

    return (
        
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: "100vh",
          border:'2px solid black'
        }}
      ><p>Task -8 [ 29-11-2024
      ]</p>
 
        <form
          onSubmit={this.formEvent}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <input type="text" name="name" id="name" placeholder="Name" required />
          <input type="email" name="email" id="email" placeholder="Email" required />
          <input type="password" name="password" id="password" placeholder="Password" required />
          <input type="number" name="mobile" id="mobile" placeholder="Mobile" required />
          <input type="submit" value="Submit" />
        </form>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          {name && <p>Name: {name}</p>}
          {email && <p>Email: {email}</p>}
          {password && <p>Password: {password}</p>}
          {mobile && <p>Mobile: {mobile}</p>}
        </div>
      </div>
    );
  }
}

export default Form;
