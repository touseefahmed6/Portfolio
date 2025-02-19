import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // @ts-ignore
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // @ts-ignore
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex items-center justify-center bg-primary">
          <div className="text-center">
            <h2 className="text-white text-2xl mb-4">Something went wrong</h2>
            <p className="text-secondary mb-4">{this.state.error?.
// @ts-ignore
            message || 'Unknown error'}</p>
            <button
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
