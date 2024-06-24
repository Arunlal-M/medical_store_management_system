import React from 'react';
import Navbar from './components/Navbar';
// import { Link } from "react-router-dom";


function App() {
  return (
    <div class="text-center">

      <Navbar /> <br /><br /><br />

      <div class="d-flexbox m-5 align-content-center">

        <h3> Medstore...  Management at it's finest </h3> <br />
        <h5> Keep track of your records effectively! </h5> <hr /> <br />
        <br />
        <br />

        {/* <div className="text-center">

          <Link to={"/register"} className="btn btn-dark">
            Register
          </Link>

          <p style={{ marginTop: "200px" }}>
            Already have an account? 
            <Link to={"/login"}>Login</Link> 
          </p>
          
        </div> */}

      </div>
    </div>
  )
}

export default App;