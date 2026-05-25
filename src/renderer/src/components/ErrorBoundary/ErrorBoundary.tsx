import { Paper, Typography } from "@mui/material";
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Component } from "react";
import type { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}

interface FallbackProps {
  message?: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <Fallback message={this.state.errorMessage} />;
    }

    return this.props.children;
  }
}

function Fallback(props: FallbackProps) {
  return (
    <Paper
      sx={{
        width: "20rem",
        height: "12.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">An error occured</Typography>
      {props.message && (
        <Typography variant="subtitle2">{props.message}</Typography>
      )}
      <ErrorIcon
        color="error"
        sx={{ width: "4rem", height: "4rem", mt: "10px" }}
      />
    </Paper>
  );
}

export default ErrorBoundary;
