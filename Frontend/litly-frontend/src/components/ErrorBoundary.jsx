import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  // Update state so the next render shows the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  // Log error info (optional)
  componentDidCatch(error, info) {
    console.error("Error Boundary Caught an error:", error, info);
    // You can log to an error tracking service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          <h2>Something went wrong.</h2>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
