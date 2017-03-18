import * as React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export class DetailComponent extends React.Component<{ name: string }, { name: string }> {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            name: ''
        };
    }

    onChange(e) {
        this.setState({
            name: e.target.value.toUpperCase()
        });
    }

    render() {
        return (
            <div>
                <p>I am detail component</p>
            </div>
        )
    }
}