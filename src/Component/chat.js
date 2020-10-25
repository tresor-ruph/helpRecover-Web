import React, { Component } from "react";

class chat extends Component{

    render(){
        return(
            <div>
                <ul className="list-group">
                <li list-group-item>Bilel</li>
                </ul>
                <div className="chatBut">
                    <div className="BouttonEnvoyer">
                        <input  name="message"></input>
                        <button className='btn btn-primary'> Envoyer !</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default chat;