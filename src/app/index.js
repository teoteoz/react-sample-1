import React from 'react';
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home"; 

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            homeLink: "Home",
            
        }
    }
    
    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }

    render () {

        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={ this.state.homeLink }/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={"Max"} 
                            initialAge={26} 
                            initialClicks={0} 
                            greet={this.onGreet} 
                            changeLink={this.onChangeLinkName.bind(this)} />
                    </div>
                </div>

            </div>
        );
        /**** 
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} age={26} user={user}>
                            <p>This is a paragraph!</p>
                        </Home>
                    </div>
                </div>

            </div>
        );
        **/
    }
}

var app = document.getElementById("app");
render(<App />, app);


