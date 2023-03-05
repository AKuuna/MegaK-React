import React, { Component } from "react";
import './App.css';

export class Counter extends Component {
    state = {
        count: 0,
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState( prev => ({
                count: prev.count + 1,
            }));
        }, 1000);    
    }

    componentWillUnmount() {
        console.log('Nooooooo!');
        clearInterval(this.intervalId);
    }

    render() {
        const {count} = this.state;
        return <h1>{count}</h1>;
    }
}