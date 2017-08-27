import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            clicks: props.initialClicks,
            status_p: 0,
            status: 0,
            homeLink: "Changed Link"

        }
        
        setTimeout( () => {
            this.setState({
                status: 1
            })
        }, 3000) 
    }
    
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3,
            clicks: this.state.clicks + 1,
            status_p: this.state.clicks % 2 == 0 ? this.state.status_p + 1 : this.state.status_p
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    render () {

        return (
            <div>
                <p>In a new component!</p>
                <p>Your name is { this.props.name } and your age is { this.state.age }</p>
                <p>TOT. CLICKS: { this.state.clicks }</p>
                <p>Status P: { this.state.status_p }</p>
                <p>Status: { this.state.status }</p>
                <hr />
                <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older</button>
                <hr />
                <button onClick={ this.props.greet } className="btn btn-primary">Greet</button>
                <hr />
                <button onClick={ this.onChangeLink.bind(this) } className="btn btn-primary">Change Header link</button>

            </div>
        );

        /**** 
        return (
            <div>
                <p>In a new component!</p>
                <p>{text}</p>
                <p>Your name is { this.props.name } and your age is { this.props.age }</p>
                <p>User Object => Name: { this.props.user.name }</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        { this.props.user.hobbies.map( (hobby, i) => <li key={ i }>{ hobby }</li>) }
                    </ul>
                </div>
                <hr/>
                { this.props.children }
                
            </div>
        );
        */
    }
}

//force to use correctly props
Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
    /*user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired*/
};