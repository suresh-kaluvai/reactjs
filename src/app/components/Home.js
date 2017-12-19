import React from 'react';

export class Home extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>In a new Component</p>
                <p>Your Name is {this.props.name}</p>  
                <p>Your Age is {this.props.age}</p> 
                <p>Your object name is {this.props.user.name}</p>
                <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>

            </div>
        );
    }
}

/* Home.propTypes = {
    name: React.PropTypes.String,
    age: React.PropTypes.Number,
    user: React.PropTypes.Object
} */
