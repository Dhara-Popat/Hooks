import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
        };
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.name} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    You clicked {this.state.count} times
                </button>
            </div>
        );
    }
}

export default ClassCounterOne
