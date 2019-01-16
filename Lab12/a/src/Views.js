import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Views extends Component {
    render() {
        return (
            <div className="links">
                <div className="form-link">
                    <Link
                        to="/form"
                        className="show-form"
                        >Show Form</Link>
                </div>
                <div className="text-link">
                    <Link 
                        to="/text"
                        className="show-text"
                        >Show Text</Link>
                </div>
                <div className="label-link">
                    <Link 
                        to="/label"
                        className="show-label"
                        >Show Label</Link>
                </div>
            </div>
        )
    }
}

export default Views
