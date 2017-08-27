import React from 'react';

//export class Header extends React.Component {
export const Header = (props) => { //for stateless components

    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">{ props.homeLink }</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}