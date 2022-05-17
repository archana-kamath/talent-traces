import React , {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../shared/AddJob.css'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Header() {

  return(
    <nav className="navbar navbar-dark bg-dark">
       <Link className="link" to="/">Admin</Link>  
      <br/>
      <Link className="link" to="/profile">Profile</Link>  
      <br/>
      <Link className="link" to ="/search">Home</Link>
      <br/>
      <Link className="link" to ="/">
        <Authenticator>
        {({ signOut, user }) => (
        <button style={{ width: '8em' }} onClick={signOut}>Sign out</button>
        )}
       </Authenticator>
     </Link>
    </nav>  )
};

export default Header;