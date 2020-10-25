import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand,  MDBNavbarToggler, MDBCollapse} from "mdbreact";

class Entete extends Component{
    state = {
        connecte: "false"
    };

    render(){
        return(
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="/home">Coronaide</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/chat">C'est quoi?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/account">Comment?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Support</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Entete;