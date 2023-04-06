import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        count: this.props.value
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count +1});
    };

    doHandelIncrement = () => {
        this.handleIncrement({id: 1});

    };

    render() {

        console.log(this.props);

        return (
        <div>
            <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.doHandelIncrement} className='btn btn-secondary btn-sm'>Increment</button>
       </div>
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes; 

    };

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    };
}
