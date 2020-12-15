/* eslint-disable no-unused-expressions */
import React from 'react';
import './login.css';
import { RiAdminFill } from "react-icons/ri";
import { Link,Redirect } from "react-router-dom";

export default function Login() {

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log("ah");
  }
    return (
      <div>
      <p style={{ fontFamily: 'revert', textAlign: 'center'}}><h1>Connectez-vous à votre espace administrateur</h1></p>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <RiAdminFill color='rgb(128,255,255)' size='3em' />
          </div>

          <form onSubmit={handleSubmit}>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Identifiant" />
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="Mot de passe" />
            <Link to="/dashboard"><input type="submit" id="modifier" className="fadeIn fourth" value="Se connecter" /></Link>
          </form>
      </div>
    </div>
  </div>
    )
}
