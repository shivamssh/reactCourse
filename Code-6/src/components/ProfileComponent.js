import React from "react";

export default class ProfileComponent extends React.Component {
    
    // Render Phase 

        constructor(){
            console.log("constructor")

            super();
            this.state = {
                first: 1,
                second: 1,
                json:null
            };
        }

        render() {
            console.log("render")

            return (
                <div>
                    <h1>Profile components <span>{this.props.name}</span></h1> 
                    <img src={this.state.json?.avatar_url} />
                </div>
            )
        }
    // / Render Phase 

    // commit phase
        async componentDidMount() {
            console.log("componentDidMount")
            const data = await fetch('https://api.github.com/users/shivamsharmanps');
            const dataJson = await data.json();
            this.setState({
                json : dataJson
            });
        }

        componentDidUpdate() {
            console.log("componentDidUpdate")
        }

        componentWillUnmount() {
            console.log("componentWillUnmount")
        }
    // / commit phase
    
}