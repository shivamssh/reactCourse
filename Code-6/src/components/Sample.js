import React from "react";

export default class Sample extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 1
        };
    }

    componentDidMount() {
        console.log("Sample => componentDidMount ")
    }

    redner() {
        return (
                <div>
                    <h1>Sample Page {this.state.count}</h1>
                </div>
        );
    }
}