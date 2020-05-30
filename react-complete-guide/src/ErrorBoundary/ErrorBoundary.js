/*
This is Error Boundary state component. This is used for error handling of code which might throw some error
Just import the error boundary component and wrap the component which might throw error inside the 
ErrorBoundary tag. 
*/


import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }


    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary;