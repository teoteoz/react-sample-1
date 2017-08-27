import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            clicks: props.initialClicks,
            status: 0
        } 
    }
    
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3,
            clicks: this.state.clicks + 1,
            status: this.state.clicks % 2 == 0 ? this.state.status + 1 : this.state.status
        });
    }

    render () {

        return (
            <div>
                <p>In a new component!</p>
                <p>Your name is { this.props.name } and your age is { this.state.age }</p>
                <p>TOT. CLICKS: { this.state.clicks }</p>
                <p>Status: { this.state.status }</p>
                <hr />
                <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older</button>
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
    initialAge: React.PropTypes.number
    /*user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired*/
};