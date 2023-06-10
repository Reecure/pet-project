import React, { ErrorInfo, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
