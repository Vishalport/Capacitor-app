import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return { error: error };
  }
  componentDidCatch(error, errorInfo) {
    console.log("--errorInfo----", errorInfo);
    console.log("--error----", error);
    console.error("Error occurred on page:", window.location.href);
    // TODO: Implement error reporting feature
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex justify-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
            <h2 className="font-bold block">Oops, Something Went Wrong!</h2>
            <p className="block">{this.state.error.message}</p>
            <p className="text-sm mt-2">Please try refreshing the page or contact support for assistance.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
