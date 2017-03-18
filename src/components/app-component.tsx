import * as React from 'react';
import { Link } from "react-router";

export class AppComponent extends React.Component<{ name: string }, any> {
    render() {
        return (
            <div className="app-component">
                This is main component.
                <Link to="detail">Link to Detail</Link>
            </div>
        );
    }
}